import Head from 'next/head'
import Link from 'next/link'

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const post = await res.json()
  return {
    props: {
      post
    }
  }
}

export default function Home({ post }) {
  console.log(post)
  
  return (
    <div className="container">
      <Head>
        <title>My Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Read{' '}
          <Link href="/posts/1">
            <a>this page!</a>
          </Link>
        </h1>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>
  )
}
