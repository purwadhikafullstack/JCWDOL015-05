import Image from 'next/image'
import styles from './page.module.css'
import Hero from '@/components/LandingPage/hero'
import Section2 from '@/components/LandingPage/section2'
import Ourservices from '@/components/LandingPage/ourservices'
import { Navbar } from '@/components/Navbar'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Home() {
  return (
    <main>
      <Hero />
      <Section2 />
      <Ourservices />
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </main>
  )
}
