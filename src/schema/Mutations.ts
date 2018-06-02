import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from "graphql";
import { PageType } from "./types/PageType";
import { addPage } from "../services/PageService";

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addPage: {
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString)
        },
        content: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      type: new GraphQLNonNull(PageType),
      resolve(_, { name, content }) {
        return addPage(name, content);
      }
    }
  }
});
export { Mutation };
