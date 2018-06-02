import { GraphQLObjectType, GraphQLNonNull, GraphQLInt } from "graphql";

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    mut: {
      type: new GraphQLNonNull(GraphQLInt),
      resolve() {
        return 0;
      }
    }
  }
});

export { Mutation };
