import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from "graphql";
import { PageType } from "./types/PageType";
import { getPage } from "../services/PageService";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    page: {
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      type: PageType,
      async resolve(_, args) {
        return getPage((args as { name: string }).name);
      }
    }
  }
});

export { RootQuery };
