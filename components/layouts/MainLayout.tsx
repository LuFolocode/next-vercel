
import Head from 'next/head'
import { ScriptProps } from 'next/script'
import { Navbar } from '../Navbar'
import styles from './MainLayout.module.css'
import { PropsWithChildren } from 'react';

export const MainLayout: React.FC<PropsWithChildren<ScriptProps>> =  ({children}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Lu</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <main className={styles.main}>

        {children}
       
      </main>
    </div>
  )
}
