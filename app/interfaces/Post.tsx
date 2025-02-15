// Typescript interface for a Post class

interface Post { // eslint-disable-next-line @typescript-eslint/no-unused-vars
    id: number,
    title: string,
    description: string,
    createdAt: Date,
    tags: Array<string>,
    file: string
  }