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
    article = NewsPlease.from_url(url)
    new_article = {
        "headline": article.title,
        "content": article.maintext,
        "image_caption": "bau bau bau",
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
