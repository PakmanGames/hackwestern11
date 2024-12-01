# https://github.com/fhamborg/news-please
from newsplease import NewsPlease
from typing import Union
from pydantic import BaseModel
from fastapi import FastAPI
import requests
import feedparser

app = FastAPI()

list_of_articles = []
current_index = 0


class ScrapeRequest(BaseModel):
    url: str


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/scrape")
def scrape_info(request: ScrapeRequest):
    global current_index
    global list_of_articles
    url = request.url
    article = NewsPlease.from_url(url)
    image_caption = get_caption(article.image_url)
    new_article = {
        "headline": article.title,
        "content": article.maintext,
        "description": article.description,
        "image_caption": image_caption,
        "article_index": current_index
    }
    current_index += 1
    list_of_articles.append(new_article)
    return new_article


@app.get("/all_articles")
def get_all_articles():
    return list_of_articles


@app.delete("/clear_articles")
def clear_articles():
    global list_of_articles
    list_of_articles = []
    return {"message": "All articles have been deleted"}


@app.post("/rss_feed")
def rss_feed(request: ScrapeRequest):
    url = request.url
    feed = feedparser.parse(url)
    if feed.status == 200:
        for entry in feed.entries:
            print(entry.title)
            print(entry.link)
    else:
        print("Failed to get RSS feed. Status code:", feed.status)
    return {"message": "RSS feed has been parsed"}

# https://developers.cloudflare.com/workers-ai/models/llava-1.5-7b-hf/
def get_caption(image_url):
    endpoint = f"https://baubau.hackathon-cf.workers.dev?url={image_url}"

    response = requests.get(endpoint)

    if response.status_code == 200:
        data = response.json()
        print(data)
        return data.get('description', 'No caption found')
    else:
        return f"Error: {response.status_code}"
