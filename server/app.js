const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
mongoose.connect('mongodb://vinaynair39:vinaynair39@ds243518.mlab.com:43518/gql-vinay', {useNewUrlParser: true})
mongoose.connection.once('open', () => {
    console.log('connected to the databse')
})
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true,
}));

app.listen(4000, () =>{
    console.log("Now listening for request on port 4000");
});