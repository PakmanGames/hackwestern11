// we need axios to make HTTP requests
const axios = require('axios');

// and we need jsdom and Readability to parse the article HTML
const { JSDOM } = require('jsdom');
const { Readability } = require('@mozilla/readability');

const url = 'https://www.cbc.ca/news/politics/trudeau-meets-trump-tariff-1.7397564';

axios.get(url).then(function(r1) {
    axios.get(url).then(function(r2) {

        // We now have the article HTML, but before we can use Readability to locate the article content we need jsdom to convert it into a DOM object
        let dom = new JSDOM(r2.data, {
            url: url
        });

        // Now pass the DOM document into readability to parse
        let article = new Readability(dom.window.document).parse();

        // Done! The article content is in the textContent property
        console.log('Article Text Content:', article.textContent);

        // Now extract images with their captions (alt text) and their location in the text
        const imageData = [];
        const textChunks = [];
        const imgTags = dom.window.document.querySelectorAll('img');

        // Loop over all child nodes of the body
        const body = dom.window.document.body;
        body.childNodes.forEach(node => {
            if (node.nodeName === 'P') {
                // Collect text from paragraph nodes
                textChunks.push(node.textContent.trim());
            } else if (node.nodeName === 'IMG') {
                // For images, extract src (URL) and alt (caption)
                const src = node.src;
                const alt = node.alt || 'No caption'; // Default to 'No caption' if no alt text
                imageData.push({ src, alt });
            }
        });

        // Merge text and images into a single array, alternating between text and image with caption
        const combinedOutput = [];
        let textIndex = 0;
        let imageIndex = 0;

        while (textIndex < textChunks.length || imageIndex < imageData.length) {
            if (textIndex < textChunks.length) {
                combinedOutput.push(textChunks[textIndex]);
                textIndex++;
            }
            if (imageIndex < imageData.length) {
                const img = imageData[imageIndex];
                combinedOutput.push(`Image: ${img.src} (Caption: ${img.alt})`);
                imageIndex++;
            }
        }

        // Log the combined result
        console.log('Combined Article with Images and Captions:');
        console.log(combinedOutput.join(', '));
    });
});
