import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send("ok listo");
});

/*  Ejemplo 1 de resolver con mutation
class Customer {
    constructor(id, {
        name,
        surname,
        company,
        email
    }) {

        this.id = id;
        this.name = name;
        this.surname = surname;
        this.company = company;
        this.email = email;
    }
}

const CustomerDB = {};

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
    },
    createCustomer: ({
        input
    }) => {
        const id = require('crypto').randomBytes(10)
            .toString('hex');
            CustomerDB[id]= input;
            return new Customer(id, input);
    }
}
 */
app.use('/graphql', graphqlHTTP({
    //que shcema va a utilizar
    schema,
    //el reseolver se pasa como root value
    rootValue: root,
    //utilizar graphical
    graphiql: true

}))

app.listen(5000, () => console.log('El servidor esta funcionando'));