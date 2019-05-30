import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send("ok listo");
});

//Resolver => respuesta del serbvidor del schema

const root = {
    customer: () => {
        return {
            "id": 71892738913,
            "name": "Fleury",
            "surname": "Escudero",
            "company": "TCS",
            "email": "Fly@gmail.com"
        }
    }
}

app.use('/graphql', graphqlHTTP({
    //que shcema va a utilizar
    schema,
    //el reseolver se pasa como root value
    rootValue: root,
    //utilizar graphical
    graphiql: true

}))

app.listen(5000, () => console.log('El servidor esta funcionando'));