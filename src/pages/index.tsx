import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import SearchParams from '@/components/SearchParams'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Injury Insights</title>
        <meta
          name="description"
          content="Injury Insights, basketball analytics"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* TODO: change icon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <SearchParams />
      </main>
    </div>
  )
}
