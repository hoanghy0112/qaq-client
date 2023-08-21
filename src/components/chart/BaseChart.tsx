import { ReactNode } from "react";

export default function BaseChart({ children }: { children: ReactNode }) {
	return (
		<div className="w-full h-full">
			<div className="absolute w-full h-full 	bg-[url(https://www.tremor.so/grid.svg)] opacity-20 bg-repeat" />
			<div className="relative w-full h-full flex flex-col">{children}</div>
		</div>
	);
}
