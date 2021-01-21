import Layout from '../../components/layout'
import getAllPostIds from '../../lib/posts'
import Date from '../../components/date'

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const post = await res.json()
  return {
    props: {
      post
    }
  }
}


export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Post({ post }) {
  console.log(post)
  return <Layout>{ post.title } {' - '}
    <Date dateString={'2020-02-04'} />
  </Layout>
}