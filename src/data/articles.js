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
					<div className="article-paragraph">
						<p>Cloud computing is a modern direction of development of the IT industry that is becoming more popular.
Cloud computing is large data centers that are distributed around the world and represent a wide range of computing resources.
Many entrepreneurs, companies and businesses are transferring their IT products to cloud services.
There are many well-known providers that provide these services, the largest and most famous are Azure, Amazon, Google, IBM, VMWare, Oracle, Dell, etc.
</p>
						<h2>Why people choose Clouds</h2>
						<p>Why are they becoming so popular? They have a number of advantages and benefits.</p>
						<p>High Availability – Cloud providers offer strong uptime (often 99.9%+).</p>
						<p>Scalability – Quickly grow (or shrink) resources depending on your needs.</p>
						<p>Flexibility and Speed – Quickly deploy apps and services without waiting for hardware.</p>
						<p>Security – Built-in tools like encryption, firewalls, access control.</p>
						<p>Cost Efficiency – In my opinion, this is a controversial issue, but popularity is growing and many businesses can combine their information resources.</p>
					</div>
					<img
						src={`${process.env.PUBLIC_URL}/img/slav-cloud-report.jpg`}
						alt="Slav cloud report"
						className="article-image"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "1 May 2025",
		title: "The Future of AI: How Artificial Intelligence Will Change the World",
		description:
			"A group of analysts — Daniel Kokotajlo (engineer, ex-OpenAI), Scott Alexander (famous blogger), Thomas Larsen (AI security researcher), Eli Lifland (AI researcher), Romeo Dean (AI researcher, Harvard student) — released one of the most ambitious forecasts in the world of AI — the AI ​​2027 report. It describes a detailed chronology of possible events from 2025 to 2030: from the emergence of the first full-fledged AI agents to the transformation of the entire global economy, the strengthening of states based on AI, even a hypothetical scenario of humanity losing control.",
		style: ``,
		keywords: [
			"The Future of AI: How Artificial Intelligence Will Change the World",
			"Slav",
			"Slav V",
			"Viacheslav Vorozhbit",
		],
		body: (
			<React.Fragment>
				<p className="article-paragraph">A group of analysts — Daniel Kokotajlo (engineer, ex-OpenAI), Scott Alexander (famous blogger), Thomas Larsen (AI security researcher), Eli Lifland (AI researcher), Romeo Dean (AI researcher, Harvard student) — released one of the most ambitious forecasts in the world of AI — the AI ​​2027 report. It describes a detailed chronology of possible events from 2025 to 2030: from the emergence of the first full-fledged AI agents to the transformation of the entire global economy, the strengthening of states based on AI, even a hypothetical scenario of humanity losing control.</p>
				<p className="article-paragraph">The AI ​​2027 report is not a prophecy, but an invitation to a conversation: about the future of AI, our place in it, and how ready we are for a world where intelligence no longer belongs only to humans.</p>
				<p className="article-paragraph">The team of strategic analysts red_mad_robot translated and adapted the report, preserving all the key points and accents, so that you don’t have to sort through dozens of English-language sources.</p>
				<p className="article-paragraph">More information please read in the article <a href="https://builtin.com/artificial-intelligence/artificial-intelligence-future">The Future of AI: How Artificial Intelligence Will Change the World</a></p>
				<img class="article-image" src="https://imageio.forbes.com/specials-images/imageserve/6736f3d0b4198928f9696fc0/As-artificial-intelligence-enters-its-third-transformative-wave---agentic-AI-/960x0.jpg?format=jpg&width=1440" alt="Girl in a jacket"/>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "18 May 2025",
		title: "Modern-day alchemy! Scientists turn lead into gold at the Large Hadron Collider",
		description:
			"For centuries, alchemists dreamed of turning lead into gold — not through magic, but by unlocking the hidden potential within metals themselves. While their methods never panned out, those of modern science finally have",
		style: ``,
		keywords: [
			"Modern-day alchemy! Scientists turn lead into gold at the Large Hadron Collider",
			"Slav",
			"Slav V",
			"Viacheslav Vorozhbit",
		],
		body: (
			<React.Fragment>
				<p className="article-paragraph">For centuries, alchemists dreamed of turning lead into gold — not through magic, but by unlocking the hidden potential within metals themselves. While their methods never panned out, those of modern science finally have.</p>
				<p className="article-paragraph">All the most interesting things are here
					<span> </span><a href="https://www.space.com/astronomy/modern-day-alchemy-scientists-turn-lead-into-gold-at-the-large-hadron-collider">LHC News</a>
				</p>
				<img class="article-image" src="https://cern70.cern/wp-content/uploads/2024/10/0504028_06-A4-at-144-dpi-crop.jpg" alt="LHC"/>
			</React.Fragment>
		),
	};
}

function article_4() {
	return {
		date: "20 May 2025",
		title: "Latest about Space Exploration",
		description:
			"People have always been attracted to distant space. What is hidden there in its dark depths, what is there, on the invisible planets of cold stars, did life exist in the endless expanses of the universe?",
		style: ``,
		keywords: [
			"Interesting information about events in the field of space exploration",
			"Slav",
			"Slav V",
			"Viacheslav Vorozhbit",
		],
		body: (
			<React.Fragment>
				<p className="article-paragraph">Scientists at CERN's Large Hadron Collider have achieved a "modern-day alchemy" feat by transmuting lead into gold. This was done by using near-miss collisions of lead nuclei, which knocked out three protons, converting the lead into gold. While the gold atoms existed for only a split second, this experiment demonstrates a new mechanism for nuclear transformation</p>
				<p className="article-paragraph">All the most interesting things are here 
					<span> </span><a href="https://www.space.com/space-exploration">Space News</a>
				</p>
				<img class="article-image" src="https://npr.brightspotcdn.com/dims4/default/b3a751a/2147483647/strip/true/crop/5120x2880+0+0/resize/1760x990!/format/webp/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F7b%2F6d%2F33133c914d3e9671f037bd67ea34%2Fadobestock-103880786.jpeg" alt="Space"/>
			</React.Fragment>
		),
	};
}

function article_5() {
	return {
		date: "10 June 2025",
		title: "Space storm capture advances coronal mass ejection research",
		description:
			"Local weather alerts are familiar warnings for potentially dangerous conditions, but an alert that puts all of Earth on warning is rare.",
		style: ``,
		keywords: [
			"Space storm capture advances coronal mass ejection research",
			"Slav",
			"Slav V",
			"Viacheslav Vorozhbit",
		],
		body: (
			<React.Fragment>
				<p className="article-paragraph">Local weather alerts are familiar warnings for potentially dangerous conditions, but an alert that puts all of Earth on warning is rare.</p>
				<p className="article-paragraph">On May 31, the U.S. Naval Research Laboratory's (NRL) space-based instrumentation captured real-time observations of a powerful coronal mass ejection (CME) that erupted from the sun, initiating a "severe geomagnetic storm" alert for Earth. 
					<span> </span><a href="https://phys.org/news/2025-06-space-storm-capture-advances-coronal.html">Space News</a>
				</p>
				<img class="article-image" src="https://scx2.b-cdn.net/gfx/news/hires/2024/sun.jpg" alt="Space"/>
			</React.Fragment>
		),
	};
}


const myArticles = [article_5, article_4, article_3, article_1, article_2];

export default myArticles;
