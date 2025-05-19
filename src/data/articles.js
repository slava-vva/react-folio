import React from "react";

function article_1() {
	return {
		date: "7 May 2025",
		title: "The Benefits of Cloud Computing",
		description:
			"Cloud computing is a new direction of development of the IT industry and is of increasing interest to businesses. I recently completed a course Cloud computing where I studied in detail the features of two popular services Microsoft Azure and Amazon AWS.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Slav",
			"Slav V",
			"Viacheslav Vorozhbit",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid grey;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src={`${process.env.PUBLIC_URL}/img/slav-cloud-report.jpg`}
						alt="Slav cloud report"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "1 May 2025",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
