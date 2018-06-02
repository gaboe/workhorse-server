import { Page } from "../models/Page";

const getPage = async (name: string) => {
  const page = await Page.findOne({ name });
  return page;
};

const addPage = (name: string, content: string) => {
  const p = new Page({ name, content });
  p.save();
  return p;
};

export { getPage, addPage };
