import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from "graphql";

const PageType = new GraphQLObjectType({
  name: "PageType",
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    content: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
});

export { PageType };
