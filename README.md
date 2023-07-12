# Exercise - Implement a Magic 8 Ball API

1. Implement API where user can ask the ball a question and receive random predictions
2. Implement a paginated CRUD API for modifying Magic 8 Ball data

# Steps

* create a *.json file with 20 possibly answers (10 affirmative, 5 non-committal, 5 negative)
* get `/ball/prediction` - get the predictions list (json, array, list of all predictions)
  * post `/ball/prediction` - create a new prediction
  * get response - pagination 
* get `/ball/prediction/{id}` - get a prediction based on id
  * put `/ball/prediction/{id}` - update an existing prediction
  * delete `/ball/predtion/{id}` - delete an existing prediction
* post `/ball/ask` - ask a question, response with random prediction/answer among 20 possibilities
* get `/ball/history` - history of all already asked questions
