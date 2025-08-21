import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									<p>{INFO.about.description}</p>
									<p>{INFO.about.description_2}</p>
									<p>{INFO.about.description_3}</p>
									<p>{INFO.about.description_4}</p>
									<h3>DISTINCTIVE QUALITIES</h3>
									<p>Responsible and resourceful IT professional with strong problem-solving skills and a proactive approach to analyzing and resolving complex issues. Capable of self-education, collaborative and team-oriented, with a willingness to support colleagues, share experience, and continuously learn from others.</p>
									<h3>ACTIVITIES</h3>
									<p>Enrolled in the Postgraduate Diploma in Information Technology (PGDIT) program at the Auckland Institute of Studies, with studies ongoing until December 2025. Working part-time at the Abilities Centre and occasionally take part in volunteer activities.</p>
									<h3>HOBBIES</h3>
									<p>Enjoy hiking (tramping), swimming, bodysurfing, and cycling, which help build endurance and focus. Passionate about astronomy, physics, science fiction, and history.</p>
									<br/>
									<p>Kind regards,<br/>Viacheslav Vorozhbit</p>
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src={`${process.env.PUBLIC_URL}/about-hi.jpg`}
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
