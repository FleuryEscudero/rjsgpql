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

const resolvers = {
    getCustomer: ({id}) => {
        return new Customer (id,CustomerDB)
    }
    createCustomer: ({
        input
    }) => {
        const id = require('crypto').randomBytes(10)
            .toString('hex');
            CustomerDB[id]= input;
            return new Customer(id, input);
    }
}