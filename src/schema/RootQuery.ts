import { GraphQLObjectType, GraphQLNonNull, GraphQLInt } from "graphql";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    test: {
      type: new GraphQLNonNull(GraphQLInt),
      async resolve() {
        return 44;
      }
    }
  }
});

export { RootQuery };
