import type { Metadata } from "next";
import "./globals.css";
import { Oxanium, Roboto } from "next/font/google";
import { Header } from "./components/Header";

const roboto = Roboto({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
	variable: "--font-roboto",
});

const oxanium = Oxanium({
  weight: ['500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-oxanium',
})

export const metadata: Metadata = {
	title: "Bloquinho Dev",
	description: "Hackathon do Carnaval de 2025",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR" className={`${roboto.variable} ${oxanium.variable}`}>
			<body className="bg-amber-100 max-w-xl mx-auto antialiased flex flex-col min-h-screen overflow-y-scroll">
        <Header />
        <main className="flex flex-1 p-5 xl:p-0">
          {children}
        </main>
      </body>
		</html>
	);
}
