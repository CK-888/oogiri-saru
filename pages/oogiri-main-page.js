import Layout from "../components/Layout";
import AnswerList from "../components/AnswerList";
import Theme from "../components/Theme";

export default function OogiriMainPage() {
	return (
		<Layout title="oogiri-main page">
			<div className="container">
				<Theme />
				<AnswerList />

			</div>
		</Layout>
	);
}