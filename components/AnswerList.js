
export default function AnswerList() {
	return (
		<div className="flex justify-center items-center h-auto m-8 ">
			{/* 回答本文 */}
			<div className="bg-red-100 h-8 w-11/12">
				aaa
			</div>
			{/* いいね */}
			<div className="bg-red-200 h-8 w-1/12 text-center">
				☆
			</div>
			{/* コメント */}
			<div className="bg-red-300 h-8 w-1/12 text-center">
				○
			</div>
		</div>
	);
}