from newsplease import NewsPlease
article = NewsPlease.from_url('https://www.cbc.ca/news/politics/trudeau-meets-trump-tariff-1.7397564')
print(article.title)
print(article.description)
print(article.maintext)
print(article.image_url)