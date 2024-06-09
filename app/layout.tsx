import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar.tsx"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mathorium",
  description: "A repository of the mathematical knowledge of Dom Ottaviano.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
