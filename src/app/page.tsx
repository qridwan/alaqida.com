import { Aqida } from '@/components/Aqida'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import {Key} from "@/components/Key";

export default function Home() {
  return (
    <>
      <Hero />
      <NavBar />
      <Introduction />
      <Aqida />
      <Key />
      <Footer />
    </>
  )
}
