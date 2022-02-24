import { GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import * as React from 'react'

export interface PostDetailPageProps { }

export default function PostDetailPage(props: PostDetailPageProps) {
  const router = useRouter()
  return (
    <div>
      <h1> Post Detail Page</h1>
      <p>Router: {JSON.stringify(router.query)}</p>
    </div>
  )
}
export const getStaticProps: GetStaticProps<PostDetailPageProps> = async (context: GetStaticPropsContext) => {
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