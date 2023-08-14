"use client";

import SemesterContext from "@/contexts/SemesterContext";
import usePersistentState from "@/hooks/usePersistentState";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useState } from "react";
export default function Providers({ children }: { children: React.ReactNode }) {
	const [semester, setSemester] = usePersistentState<Semester | undefined>(
		"semester",
		undefined
	);

	return (
		<NextUIProvider>
			<NextThemesProvider attribute="class" defaultTheme="dark">
				<SemesterContext.Provider value={{ semester, setSemester }}>
					{children}
				</SemesterContext.Provider>
			</NextThemesProvider>
		</NextUIProvider>
	);
}
