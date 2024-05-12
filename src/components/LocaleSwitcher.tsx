"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

export default function LocalSwitch({ lang }: { lang?: "en" | "bn" }) {
	const router = useRouter();
	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		router.push("/" + e.target.value);
	};

	return (

		<select
			onChange={handleChange}
			className="sticky z-50 right-18 top-40 p-4 rounded w-[150px] text-black"
		>
			<option value={"en"} selected={lang == "en"}>
				En
			</option>
			<option value={"bn"} selected={lang == "bn"}>
				Bn
			</option>
		</select>

	);
}
