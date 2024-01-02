import { GridPattern } from '@/components/GridPattern'
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative pb-20 pt-5 sm:pb-32 sm:pt-14">
      <div className="absolute inset-x-0 top-0 h-32 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
        <GridPattern x="50%" />
      </div>
      <div className="relative text-center text-sm text-slate-600">
        <p>&copy; Copyright <Link className="text-green-900" href="https://islamic.network" target="_blank">Islamic Network</Link>. The translation of the text is copyrighted to
        Shaykh Hisham Kabbani and the As-Sunnah Foundation of America.</p>
      </div>
    </footer>
  )
}
