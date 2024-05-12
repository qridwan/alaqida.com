import Image from 'next/image'

import { Button } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'
import coverImage from '@/images/cover.svg'
import { getDictionary } from '@/app/[lang]/dictionaries';

export function Hero({
	dictionary,
}: {
	dictionary: Awaited<ReturnType<typeof getDictionary>>["hero"];
}) {
	return (
		<header className="overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
			<div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-16 lg:grid-cols-12 lg:gap-y-16 lg:px-3 lg:pb-20 lg:pt-10 xl:pt-0 xl:pb-32">
				<div className="relative flex items-end lg:col-span-5 lg:row-span-2">
					<div className="absolute -bottom-12 -top-20 left-0 right-1/2 z-10 rounded-br-6xl bg-green-900 text-white/10 md:bottom-8 lg:-inset-y-32 lg:left-[-100vw] lg:right-full lg:-mr-40">
						<GridPattern
							x="100%"
							y="100%"
							patternTransform="translate(112 64)"
						/>
					</div>
					<div className="relative z-10 mx-auto flex w-64 rounded-xl bg-white shadow-xl md:w-80 lg:auto">
						<Image className="w-full" src={coverImage} alt="" priority />
					</div>
				</div>
				<div className="relative px-4 sm:px-6 lg:col-span-7 lg:pb-14 lg:pl-16 lg:pr-0 xl:pl-20">
					<div className="hidden lg:absolute lg:-top-32 lg:bottom-0 lg:left-[-100vw] lg:right-[-100vw] lg:block lg:bg-slate-100" />
				</div>
				<div className="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pl-16 lg:pt-0 xl:pl-20">
					<div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
						<h1>
							<span className="font-display text-2xl font-extrabold text-slate-900 sm:text-4xl">{dictionary.title_head}</span><br />
							<span className="text-2xl text-slate-900 sm:text-2xl"> {dictionary.title_preposition} </span>
							<span className="font-display text-2xl font-extrabold text-slate-900 sm:text-4xl">{dictionary.subtitle}</span>
						</h1>
						<p className="mt-4 text-2xl text-slate-600">
							{dictionary.hero_description}
						</p>
						<div className="mt-8 flex gap-4">
							<Button href="#the-aqida" variant="outline" color="green">
								{dictionary.read_the_aqida}
							</Button>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
