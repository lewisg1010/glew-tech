import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import { useEffect } from 'react'


const Home: NextPage = () => {

  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <div className="test">
      <Head>
        <title>Glew Tech</title>
        <meta name="description" content="Ideas about Product Management, Startups, and Web Design" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1>
          CSS TEST <a href="https://nextjs.org">Next.js!</a>
        </h1>
      The current theme is: {theme}
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
      <button onClick={() => setTheme('system')}>System Mode</button>
    </div>
  )
}

export default Home
