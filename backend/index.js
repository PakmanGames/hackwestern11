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
//     feed.items.forEach(item => {
//         console.log(item.title + ':' + item.link)
//         console.log(item.pubDate)
//         console.log(item.content)
//     });
//
// })();

async function scrapePage(url) {
    try {
        const { data: html } = await axios.get(url);
        const $ = cheerio.load(html);

        // Extract text content
        const textContent = $('body').text();

        // // Extract image URLs
        // const images = [];
        // $('img').each((_, img) => {
        //     const src = $(img).attr('src');
        //     if (src) images.push(src);
        // });
        //
        // // console.log('Text Content:', textContent.slice(0, 500)); // Preview first 500 chars
        // console.log('Text Content:', textContent);
        // console.log('Images:', images);
        const processTextAndImages = (html) => {
            const startKey = "Open Full Embed in New Tab (external link)";
            const endKey = "More Stories Like This";
            const imagePattern = /Image\s+\|\s+.*?<\/div>/gs;

            // Start and end slicing
            const startIndex = html.indexOf(startKey);
            const endIndex = html.indexOf(endKey);

            if (startIndex === -1 || endIndex === -1 || startIndex >= endIndex) {
                console.error("Start or end key not found, or invalid order!");
                return [];
            }

            const relevantText = html.slice(startIndex + startKey.length, endIndex).trim();

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
        const result = processTextAndImages(textContent);

        // Output the split text
        console.log(result);

    } catch (error) {
        console.error('Error scraping the page:', error.message);
    }
}

scrapePage("https://www.cbc.ca/lite/story/1.7396734");