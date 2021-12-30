import { GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from 'next'
import * as React from 'react'

export interface PostProps {
  post: any
}

export default function Post(props: PostProps) {
  return <div>Post page</div>
}
export const getStaticProps: GetStaticProps<PostProps> = async (context: GetStaticPropsContext) => {
  // sever side
  // build time

  return {
    props: {
      post: [],
    },
  }
}
