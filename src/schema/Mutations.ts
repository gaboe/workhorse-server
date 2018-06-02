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
      resolve(_, args) {
        const { name, content } = args as AddPageArgs;
        return addPage(name, content);
      }
    }
  }
});
type AddPageArgs = { name: string; content: string };
export { Mutation };
