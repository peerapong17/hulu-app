import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import requests from '../utils/request'
import Result from '../components/Result'

export default function Home({ data }) {
  const {results} = data
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
      </Head>

      <Header />
      <Nav />
      <Result results={results} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre
  const data = await fetch(
    `https://api.themoviedb.org/3${requests.[genre]?.url || requests.fetchTrending.url}`
  )
    .then((res) => {
      return res.json()
    })

  return {
    props: {
      data
    }
  }
}
