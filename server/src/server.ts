import express from 'express';

const app = express();

app.post('/users', (request, response) => {
    const users = [
        {
            "name": "Samuel",
            "age": 25
        },
        {
            "name": "Monic",
            "age": 29
        },
        {
            "name": "Leticia",
            "age": 17
        }
    ]
    return response.json(users);
})

//localhost:3333
app.listen(3333);