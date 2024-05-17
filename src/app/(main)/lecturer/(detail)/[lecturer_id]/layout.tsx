import BreadCrumb from "@/components/BreadCrumb";
import PageTabs from "@/components/PageTabs";
import { GET_LECTURER_DETAIL, GET_SUBJECT_INFO } from "@/constants/api_endpoint";
import Link from "next/link";
import { ReactNode } from "react";

export default async function Layout({
	params: { lecturer_id },
	children,
}: {
	params: { lecturer_id: string };
	children: ReactNode;
}) {
	// const res = await fetch(`${GET_LECTURER_DETAIL}/${lecturer_id}`);
	// const { faculty_id, faculty_name, lecturer_name }: ILecturerInfo =
	// 	await res.json();

	return (
		<div>
			<h1 className="font-semibold text-2xl">{lecturer_id}</h1>
			{/* <h2 className="mt-2 text-gray-600 dark:text-gray-300">
				Khoa{" "}
				<Link href={`/faculty/${faculty_id}`}>
					<span className=" underline hover:text-sky-600 hover:dark:text-sky-500">
						{faculty_name}
					</span>
				</Link>
			</h2> */}
			<BreadCrumb />
			<PageTabs
				lastIndex={3}
				defaultPath={`lecturer/${lecturer_id}`}
				tabs={tabs}
			/>
			<div className="mt-14"> {children}</div>
		</div>
	);
}

export const tabs = [
	{
		link: "",
		title: "Trang chủ",
	},
	{
		link: "classes",
		title: "Tất cả các lớp",
	},
	{
		link: "semesters",
		title: "Điểm trung bình qua các học kỳ",
	},
	{
		link: "comments",
		title: "Bình luận",
	},
];

interface ILecturerInfo {
	lecturer_id: string;
	lecturer_name: string;
	faculty_id: string;
	faculty_name: string;
}

export async function generateMetadata({
	params: { lecturer_id },
}: {
	params: { lecturer_id: string };
}) {
	// const res = await fetch(`${GET_LECTURER_DETAIL}/${lecturer_id}`);
	// const { lecturer_name, lecturer_id }: ILecturerInfo = await res.json();

	return {
		title: `${lecturer_id} - AQA`,
	};
}