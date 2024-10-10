import { defineDocumentType, ComputedFields, makeSource } from 'contentlayer/source-files'


const root = process.cwd()
const isProduction = process.env.NODE_ENV === 'production'

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc: { _raw: { flattenedPath: any } }) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc: { _raw: { flattenedPath: string } }) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
  path: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath,
  },
  filePath: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFilePath,
  },
}


export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
  },
  computedFields,
}))

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true, },    
    date: { type: "string", },
    tags: { type: 'list', of: { type: 'string' }, default: [] },
    description: { type: "string", },
    image: { type: "string", },    
    author: { type: "string", },
    author_image: { type: "string", },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post, Page],
})
