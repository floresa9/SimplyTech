import Head from 'next/head'
import { Postcard, Categories, PostWidget } from '/Components'
import { getPosts } from '/services/index.js'
import { FeaturedPosts } from '/sections/index.js'
import Landing from './landing/index'
export default function Home({ posts }) {
  return (
    <>
      {' '}
      <div className="container mx-auto mb-8 px-10">
        <Head>
          <title>SimplyTech</title>
          <link rel="icon" href="/favicon.ico"></link>
        </Head>
        {/* <FeaturedPosts /> */}
        {/* <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <Postcard post={post.node} key={index} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div> */}
      </div>
      <div>
        <Landing />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { posts },
  }
}
