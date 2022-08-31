interface BlogInterface {
    title: string,
    datePublished: string, 
    slug: string,
    author: {
      name: string,
      avatar: {
        url: string,
      }
    },
    content: {
      text: string,
    },
    coverPhoto: {
      url: string,
    }
}

export type BlogType = BlogInterface;