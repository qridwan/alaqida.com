import { SectionHeading } from '@/components/SectionHeading'
import {Container} from "@/components/Container";

export function Key() {
  return (
      <section
          id="key"
          aria-label="Key"
          className="pb-16 pt-20 sm:pb-20 md:pt-20 lg:py-20"
      >
        <Container className="text-lg tracking-tight text-slate-700 pt-10">
          <SectionHeading number="3" id="key">
            Unicode Character Key
          </SectionHeading>
          <p className="mt-4">
              Meanings and pronunciation of Arabic unicode characters used in the text.
          </p>

          <ul className="mt-4 ml-7 mr-7 text-gray-700 list-decimal">
            <li>ﷻ - Jalla Jalaal la Hu. Exalted and Glorified. Written and said whenever God&apos;s name Allah is invoked.</li>
            <li>ﷺ -  Sal lAllaahu &apos;alayhi wa Sallam - May Allah bless him and grant him peace. Written and said whenever the Prophet Muhammad is mentioned.</li>
            <li>ؓ -  Radi Allah anhu - May Allah be pleased with him (or them). Written and said whenever one of the companions of the Prophet Muhammad is mentioned.</li>
          </ul>
        </Container>
      </section>
  )
}
