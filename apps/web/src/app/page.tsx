import Image from 'next/image'
import styles from './page.module.css'
import Hero from '@/components/LandingPage/hero'
import Section2 from '@/components/LandingPage/section2'
import Ourservices from '@/components/LandingPage/ourservices'
import { Navbar } from '@/components/Navbar'

export default function Home() {
  return (
    <main>
     
      <Hero />
      <Section2 />
      <Ourservices />
    </main>
  )
}
