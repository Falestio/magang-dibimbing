const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const cors = require('cors');

const app = express();
const port = 4000;
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true, // Enables the GraphiQL IDE
}));

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
