from flask import Flask, request, jsonify,send_file
from flask_cors import CORS, cross_origin
from chat import get_response
from train import run_training
from config import *
def append_list_as_row(file_name, list_of_elem):
    # Open file in append mode
    with open(file_name, 'a+', newline='') as write_obj:
        # Create a writer object from csv module
        csv_writer = writer(write_obj)
        # Add contents of list as last row in the csv file
        csv_writer.writerow(list_of_elem)

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
discussion =mydb["discussion"]

@app.get("/js")
@cross_origin()
#def index_get():
    #return render_template("base.html")
def get_file_js(): 
    return send_file('static/app.js',mimetype="text/javascript",download_name='app.js')

@app.get("/css")
@cross_origin()
def get_file_css(): 
    return send_file('static/style.css',mimetype="text/css",download_name='style.css')

@app.post("/predict")
@cross_origin()
def predict():
    text = request.get_json().get("message")
    # TODO: check if the text is valid
    response = get_response(text)
    row_contents = {'Question':text,'Reponse':response}
    #append_list_as_row('test.csv',row_contents)
    message = {"answer": response}
    discussion.insert_one(row_contents)
    return jsonify(message)

@app.get("/trainer")
@cross_origin()
def trainer():
    resultat=run_training()
    return jsonify(resultat)

if __name__ == "__main__":
    app.run()
