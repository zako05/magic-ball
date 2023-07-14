# Magic 8 Ball API

## Install & Run

```bash
npm install
nodemon app.js
```

## Request examples

GET `/ball/prediction`

```bash
curl -X GET http://localhost:3000/ball/prediction
```

POST `/ball/prediction`

```bash
curl -X POST -H "Content-Type: application/json" -d '{"id":21,"text":"Test"}' http://localhost:3000/ball/prediction
```

GET `/ball/prediction/:id`

```bash
```
PUT `/ball/prediction/:id`

```bash
curl -X PUT -H "Content-Type: application/json" -d '{"id": 1, "text": "testtest"}' http://localhost:3000/ball/prediction/2
```

DELETE `/ball/prediction/:id`

```bash
curl -X DELETE 'http://localhost:3000/ball/prediction/2'
```

POST `/ball/ask`

```bash
curl -X POST -H "Content-Type: application/json" -d '{"question":"Do I win a car?"}' http://localhost:3000/ball/ask
```
