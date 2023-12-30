const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLList,
} = require("graphql");
const pool = require("./db");
const { v4: uuidv4 } = require("uuid");

const NoteType = new GraphQLObjectType({
    name: "Note",
    fields: () => ({
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        body: { type: GraphQLString },
        createdat: { type: GraphQLString },
    }),
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        note: {
            type: NoteType,
            args: { id: { type: new GraphQLNonNull(GraphQLString) } },
            resolve(parent, args) {
                return pool
                    .query("SELECT * FROM notes WHERE id = $1", [args.id])
                    .then((res) => res.rows[0]);
            },
        },
        notes: {
            type: new GraphQLList(NoteType),
            resolve(parent, args) {
                return pool
                    .query("SELECT * FROM notes")
                    .then((res) => res.rows);
            },
        },
    },
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addNote: {
            type: NoteType,
            args: {
                title: { type: new GraphQLNonNull(GraphQLString) },
                body: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                const id = uuidv4();
                const { title, body } = args;
                return pool
                    .query(
                        "INSERT INTO notes (id, title, body) VALUES ($1, $2, $3) RETURNING id, title, body, createdat",
                        [id, title, body]
                    )
                    .then((res) => res.rows[0]);
            },
        },
        deleteNote: {
            type: GraphQLString,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                const { id } = args;
                return pool
                    .query("DELETE FROM notes WHERE id = $1 RETURNING id", [id])
                    .then((res) => (res.rows[0] ? res.rows[0].id : null));
            },
        },
        updateNote: {
            type: NoteType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
                title: { type: GraphQLString },
                body: { type: GraphQLString },
            },
            resolve(parent, args) {
                const { id, title, body } = args;
                const fieldsToUpdate = [];
                const values = [];
                console.log(id, title, body)

                if (title) {
                    fieldsToUpdate.push("title");
                    values.push(title);
                }
                if (body) {
                    fieldsToUpdate.push("body");
                    values.push(body);
                }

                if (fieldsToUpdate.length === 0) {
                    throw new Error("No fields provided for update");
                }

                const setClause = fieldsToUpdate
                    .map((field, index) => `${field} = $${index + 1}`)
                    .join(", ");

                values.push(id);

                const query = `UPDATE notes SET ${setClause} WHERE id = $${values.length} RETURNING *`;

                return pool.query(query, values).then((res) => res.rows[0]);
            },
        },
    },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
