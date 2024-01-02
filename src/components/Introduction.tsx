import { Container } from '@/components/Container'
import {SectionHeading} from "@/components/SectionHeading";

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-20 lg:py-20"
    >
      <Container className="text-lg tracking-tight text-slate-700 pt-10">
        <SectionHeading number="1">
          Introduction
        </SectionHeading>
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900 pt-8">
          In the Name of Allah, the Merciful, the Compassionate.
        </p>
        <p className="mt-4">
          In a time when Muslims are unable to unite, it is important to know
          what the majority of our Community has believed for over 1,400 years.
        </p>
        <p className="mt-4">
          Today we are overwhelmed with misinformation and bombarded by western ideologies; this
          causes confusion about our identity and beliefs. Many, if not most, who grow up under modern
          circumstances are not even aware of what to believe.
        </p>
        <p className="mt-4">
          The Aqida of Imam Tahawi (239-321 A.H.), also known as the Aqida of Ahl al-Sunnah wa&apos;l-Jamaa&apos;ah,
          represents the beliefs of the majority and is reproduced here so everyone has an easy
          way to reference what the beliefs of Sunni Muslims are (it can be said to represent the creed of both
          Asharis and Maturidis). A discussion on theology and doctrine is not the goal of this website. It&apos;s there, because
          sometimes we have to read, and re-read, so that that we can remember and continue to remind ourselves of what we believe in and how to live it.
        </p>
        <p className="mt-4">
          This text has been reproduced here from Book 1 (Beliefs) of Mawalana Shaykh Hisham Kabbani&apos;s
          Encyclopedia of Islamic Doctrine in the hope that it will be a useful resource for all Muslims. Shaykh
          Hisham says: <i>&quot;While the permanent relevance of the statements of belief in Al-Aqida is lear, the historical
          weight of the statements can be properly appreciated only if the work is studied with the guidance of some
          learned person.&quot;</i> Please keep this in mind when reading the text.
        </p>
        <p className="mt-4">
          May Allah grant him a higher station and more blessings for his efforts in making this available
          to those of little understanding like us, may He bless Imam Tahawi for penning this Aqida, and may
          He grant us the ability to understand, unite, and practice this.
        </p>
        <p className="mt-4">
          May Allah forgive us for any mistakes and guide us all to the Straight Path.
        </p>
      </Container>
    </section>
  )
}
