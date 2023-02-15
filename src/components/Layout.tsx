import Nav from './Nav'
import styles from '../styles/Home.module.css'
import React from 'react'
import Footer from './Footer'

type LayoutProps = { children: React.ReactNode }

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className={styles.container}>
        <Nav />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
