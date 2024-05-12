export async function generateStaticParams() {
	return [{ lang: "en" }, { lang: "bn" }];
}

export default function Root({ children, params }: { children: React.ReactNode, params: { lang: string } }) {
	return (
		<html lang={params.lang}>
			<body>{children}</body>
		</html>
	);
}
