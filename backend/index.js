let Parser = require('rss-parser');
const axios = require('axios');
const cheerio = require('cheerio');
let parser = new Parser();

// (async () => {
//
//     let feed = await parser.parseURL('https://www.cbc.ca/webfeed/rss/rss-politics');
//     console.log(feed.title);
//     console.log(feed);
//
//     for (const item of feed.items) {
//         console.log(item.title + ':' + item.link)
//         console.log(item.pubDate)
//         const extractNumber = (url) => {
//             const match = url.match(/-1\.\d+/);
//             return match ? match[0].slice(1) : null; // Remove the leading "-"
//         };
//         const number = extractNumber(item.link);
//         const liteUrl = `https://www.cbc.ca/lite/story/${number}`;
//         console.log(liteUrl);
//         // console.log(await scrapePage(liteUrl));
//     }
//
// })();

async function scrapePage(url) {
    try {
        const { data: html } = await axios.get(url);
        const $ = cheerio.load(html);

        // Extract text content
        const textContent = $('body').text();
        // console.log(textContent);
        const result = processTextAndImages(textContent);
        console.log(result);
        return result;
    } catch (error) {
        console.error('Error scraping the page:', error.message);
    }
}

const processTextAndImages = (html) => {
    const startKey1 = "Open Full Embed in New Tab (external link)";
    const startKey2 = "Image  |";  // Alternative start key
    const endKey = "More Stories Like This";
    const imagePattern = /Image\s+\|\s+.*?<\/div>/gs;

    // Find the first start key and end key
    const startIndex1 = html.indexOf(startKey1);
    const startIndex2 = html.indexOf(startKey2);
    const endIndex = html.indexOf(endKey);

    // Determine which start key comes first
    const startIndex = startIndex1 === -1 || (startIndex2 !== -1 && startIndex2 < startIndex1) ? startIndex2 : startIndex1;

    if (startIndex === -1 || endIndex === -1 || startIndex >= endIndex) {
        console.error("Start or end key not found, or invalid order!");
        return [];
    }

    const relevantText = html.slice(startIndex + Math.min(startKey1.length, startKey2.length), endIndex).trim();

    // Split by images, keeping text blocks as single elements
    const result = [];
    let lastIndex = 0;

    relevantText.replace(imagePattern, (match, offset) => {
        // Push the text before the image
        const textBlock = relevantText.slice(lastIndex, offset).trim();
        if (textBlock) result.push(textBlock);

        // Push the image block itself
        result.push(match.trim());

        // Update lastIndex
        lastIndex = offset + match.length;
    });

    // Push any remaining text after the last image
    const finalText = relevantText.slice(lastIndex).trim();
    if (finalText) result.push(finalText);

    return result;
};

scrapePage('https://www.cbc.ca/lite/story/1.7395405');