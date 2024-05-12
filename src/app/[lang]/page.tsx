
import { getDictionary } from "./dictionaries";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { Introduction } from "@/components/Introduction";
import { Aqida } from "@/components/Aqida";
import { Key } from "@/components/Key";
import { Footer } from "@/components/Footer";

export default async function Page({ params: { lang } }: { params: { lang: 'en' | 'bn' } }) {

	const dict = await getDictionary(lang);

	return (
		<>
			<Hero dictionary={dict.hero} />
			<NavBar dictionary={dict.hero} />
			<Introduction dictionary={dict.hero} />
			<Aqida dictionary={dict.hero} />
			<Key dictionary={dict.hero} />
			<Footer dictionary={dict.hero} />
		</>
	);
}
