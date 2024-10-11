from flask import Flask
from flask_cors import CORS
from flask import request, jsonify
from scrape import scraping

app = Flask(__name__)

CORS(app, origins=['*'])


@app.route("/", methods=['POST'])

@app.route("/scraping", methods=['POST'])
def Scraping_downloadCSV():
    try:
    
        url = request.json["URL"]
        message = request.json["message"]
        search_count_temp = request.json["Search_count"]
        search_count = int(search_count_temp)
        scrape_url = request.json["Search_count"]
        if message == "Scraping start":

            scraping(scrape_url, search_count)
            # print(search_url, search_number)
            # print(type(search_url))
            # print(type(search_number))
            # return jsonify({"email": email, "password": password})
        return jsonify({"data":"Scrapping started"})
    except Exception as Ex:
        return {"statues":400, "message": str(Ex)}
    
if __name__ == "__main__":
    app.run()