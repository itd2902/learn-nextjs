import { GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from 'next'
import * as React from 'react'

export interface PostProps {
  posts: any[]
}

export default function Post({ posts }: PostProps) {
  console.log("😍😍😍 👉 posts", posts)
  return (
    <>
      <h1>Post page</h1>
      <ul>
        {posts.map(post =>
          <>
            <li>{post.id}</li>
            <li>{post.title}</li>
          </>
        )}
      </ul>
    </>
  )
}
export const getStaticProps: GetStaticProps<PostProps> = async (context: GetStaticPropsContext) => {
  // sever side
  // build time
  // dev mỗi lần request đều chạy hàm này. chạy bên phía server nodejs
  // production thì build ở môi trường runtime nên chỉ chạy 1 lần
  // fetch chỉ có bên client. nhưng trong nextjs hỗ trợ cả bên server. đây là hàm chạy trong server
  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
  const data = await response.json();
  console.log(data);

  return {
    props: {
      posts: data.data.map((x: any) => ({ id: x.id, title: x.title })),
    },
  }
}
