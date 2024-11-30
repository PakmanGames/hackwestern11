from newsplease import NewsPlease
from typing import Union
from pydantic import BaseModel
from fastapi import FastAPI

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
    # print(url)
    article = NewsPlease.from_url(url)
    new_article = {
        "headline": article.title,
        "content": article.maintext,
        "image_caption": "bau bau bau",
        "article_index": current_index
    }
    current_index += 1
    # print(article)
    # print(article.title)
    # print(article.description)
    # print(article.maintext)
    # print(article.image_url)
    list_of_articles.append(new_article)
    return new_article
