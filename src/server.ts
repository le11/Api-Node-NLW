import express from 'express'

const app = express();

app.get('/users', (request, response) => {
    console.log('listagem de usuários');

    response.json([
        'Leticia',
        'Romario',
        'Eduardo',
        'Waldemar'
    ])
});

app.listen(3333);