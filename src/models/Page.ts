import { Schema, model, Document } from "mongoose";

interface IPage {
  name: string;
  content: string;
}

interface IPageDbModel extends Document {}

const pageSchema = new Schema({
  name: String,
  content: String
});
const Page = model<IPageDbModel>("Page", pageSchema);
export { IPage, pageSchema, Page };
