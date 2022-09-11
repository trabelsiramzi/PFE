import json
import pymongo

with open('intents.json', 'r',encoding='utf-8') as f:
  data = json.load(f)

client = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = client["SopraBot"]
mycol = mydb["intents"]  

for intent in data['intents']:
   x = mycol.insert_one(intent)

for y in mycol.find():
  print(y) 