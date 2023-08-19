"use client";

import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

export default function SubjectIcon({
	width = 20,
	color: defaultColor,
}: {
	width?: number;
	color?: string;
}) {
	const { theme } = useTheme();
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => setIsMounted(true), []);

	const color = useMemo(
		() => defaultColor || (theme == "light" ? "black" : "white"),
		[theme, defaultColor]
	);

	return (
		<>
			{isMounted ? (
				<svg
					width={width}
					height={width}
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g id="vuesax/linear/frame">
						<g id="frame">
							<path
								id="Vector"
								d="M16.44 8.90002C20.04 9.21002 21.51 11.06 21.51 15.11V15.24C21.51 19.71 19.72 21.5 15.25 21.5H8.73998C4.26998 21.5 2.47998 19.71 2.47998 15.24V15.11C2.47998 11.09 3.92998 9.24002 7.46998 8.91002"
								stroke={color}
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								id="Vector_2"
								d="M12 2V14.88"
								stroke={color}
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								id="Vector_3"
								d="M15.35 12.65L12 16L8.65002 12.65"
								stroke={color}
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</g>
					</g>
				</svg>
			) : null}
		</>
	);
}
