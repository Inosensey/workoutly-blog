interface PostInfoInterface {
    title: string,
    datePublished: string,
    slug: string,
    tags: string,
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
interface PostListInterface {
    title: string,
    datePublished: string,
    slug: string,
    coverPhoto: {
    url: string,
    }
}

export type PostInfoType = PostInfoInterface;
export type PostListType = PostListInterface;