let Parser = require('rss-parser');
let parser = new Parser();

(async () => {

    let feed = await parser.parseURL('https://www.cbc.ca/webfeed/rss/rss-politics');
    console.log(feed.title);
    console.log(feed);

    feed.items.forEach(item => {
        console.log(item.title + ':' + item.link)
        console.log(item.pubDate)
        console.log(item.content)
    });

})();