from flask import Flask, render_template
from bs4 import BeautifulSoup
from lxml import etree
import requests
import json
import datetime as dt

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

"""

def getEthPrice():
    URL = "https://coinmarketcap.com/currencies/ethereum/"
    webpage = requests.get(URL)
    soup = BeautifulSoup(webpage.content, "html.parser")
    dom = etree.HTML(str(soup))
    return dom.xpath('//*[@id="__next"]/div[1]/div[1]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/span')[0].text

@app.route("/api/ethereum")
def ethereum_api():
    price = getEthPrice()
    data_set = {'Asset': 'Ethereum', 'Source': 'Coin Market Cap', 'Current Price': str(price), 'TimeStamp': dt.datetime.now().strftime("%m/%d/%Y, %H:%M:%S")}
    return json.dumps(data_set)


Projects to include:
    - Crypto portfolio tracker
        - Create a webpage where people can input addresses and create a portfolio view
    - Database final project?
        - Include salary info and input pages
    - Machine learning final project?
        - Redo
    - Spiderman vs batman
    - Arbitrage betting scrapers
    - Task automation 
    - Structure of the website
    - AI projects
        - Chess Adversarial search
        - Sudoku CSP
        - Tile Planning
    - DS capstone weather analysis

TODO:
    - Crypto arbitrage
        - password protected page for arb dashboard 
            - randomly generated, changes every couple of days? or 
            - create username and password for users (only Walsh family)
                - limit users by email address (only allow Walsh emails to create accounts)
            - have button to hide money amounts and addresses
    - Machine learning algorithms
        - KNN
        - KMeansClustering
        - DBSCAN clustering
        - Decision Trees
        - Algo from ml class
        - Show understaning of algorithms
    - Sudoku solver from picture
        - Read picture with cv and solve with sudoku csp
    - Raw land price analysis
    - Analysis of data scientist job posts (salary, skills needed, etc.)
    - Portfolio backtracker using Yahoo Finance

Clean up github code (refactor classes etc.) and add documentation / README descriptions
Add bio and objectives (home page)
Include downloadable pdf of resume (resume page)

add secret_key to app
debugging

What skills do I want to present in the website? - target skills asked for in DS internships
    1. Machine Learning
    2. Artificial Intelligence
    3. Data analysis
    4. Data visualization
    5. Statistical modeling
    6. Automation
    In doing above, show:
        * Python
        * SQL (databases)
"""

if __name__ == "__main__":
    app.run(host="0.0.0.0")
