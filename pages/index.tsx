import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../src/Navbar'
import HeroSection from '../src/HeroSection'


export default function Home() {
  return (
    <>
      <Head>
        <title>Glew Tech</title>
        <meta name="description" content="Ideas about Product Management, Startups, and Web Design" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HeroSection />
      {/* <h1> CSS TEST</h1>
      <p className="font-bold underline">hello</p> */}
    </>
  );
}
