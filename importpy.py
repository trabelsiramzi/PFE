import json
import pymongo

with open('intents.json', 'r',encoding='utf-8') as f:
  data = json.load(f)

client = pymongo.MongoClient("mongodb+srv://trabelsiramzitr:onDL29MjvCoQ9Mg7@cluster0.gsxhvhx.mongodb.net/?retryWrites=true&w=majority")
mydb = client["SopraBot"]
mycol = mydb["intents"]  

for intent in data['intents']:
   x = mycol.insert_one(intent)

for y in mycol.find():
  print(y) 