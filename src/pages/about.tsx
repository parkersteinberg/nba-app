import Head from 'next/head'

const about = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <h1>Hoop Vision 1.0</h1>
      <p>
        By{' '}
        <a href="https://www.github.com" target="_blank" rel="noreferrer">
          Parker Steinberg
        </a>
      </p>
    </div>
  )
}

export default about
