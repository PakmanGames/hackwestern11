from newsplease import NewsPlease
from typing import Union
from pydantic import BaseModel
from fastapi import FastAPI

app = FastAPI()


class ScrapeRequest(BaseModel):
    url: str


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/scrape")
def scrape_info(request: ScrapeRequest):
    url = request.url
    # print(url)
    article = NewsPlease.from_url(url)
    print(article)
    print(article.title)
    print(article.description)
    print(article.maintext)
    print(article.image_url)
    return {article}
