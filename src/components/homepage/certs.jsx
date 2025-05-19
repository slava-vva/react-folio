import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/certs.css";

const Certs = () => {
	return (
		<div className="certs">
			<Card
				icon={faBriefcase}
				title={<h2>Certificates & Additional Training</h2>}
				body={
					<div className="certs-body">
						<div className="certs">
							<div className="container">
								<div className="certs-title-row">
									<div>
										<img
											src={`${process.env.PUBLIC_URL}/cert-ais-img-3.jpg`}
											alt="AIS-NZCEL5"
											className="certs-image"
										/>
									</div>
									<div className="certs-title-col-2 certs-title">
										NZCEL Level 5 (New Zealand Certificate
										in English Language)
									</div>
								</div>
								<div>
									<div className="certs-subtitle">
										Auckland Institutes of Studies, Auckland
									</div>
									<div className="certs-duration">2025</div>
								</div>
							</div>
						</div>
						<div className="certs">
							<div className="container">
								<div className="certs-title-row">
									<div>
										<img
											src={`${process.env.PUBLIC_URL}/cert-ms-1.png`}
											alt="twitter"
											className="certs-image"
										/>
									</div>
									<div className="certs-title-col-2 certs-title">
										Developing Microsoft ASP.NET Core MVC
										Web Applications
									</div>
								</div>
								<div>
									<div className="certs-subtitle">
										Specialist, St-Petersburg
									</div>
									<div className="certs-duration">2022</div>
								</div>
							</div>
						</div>
						<div className="certs">
							<div className="container">
								<div className="certs-title-row">
									<div>
										<img
											src={`${process.env.PUBLIC_URL}/cert-gen-3.png`}
											alt="twitter"
											className="certs-image"
										/>
									</div>
									<div className="certs-title-col-2  certs-title">
										Extended Python Programming Course
									</div>
								</div>
								<div>
									<div className="certs-subtitle">
										EURECA Traning Center, St-Petersburg
									</div>
									<div className="certs-duration">2020</div>
								</div>
							</div>
						</div>
						<div className="certs">
							<div className="container">
								<div className="certs-title-row">
									<div>
										<img
											src={`${process.env.PUBLIC_URL}/cert-gen-3.png`}
											alt="twitter"
											className="certs-image"
										/>
									</div>
									<div className="certs-title-col-2  certs-title">
										Red Hat - System Administration I
									</div>
								</div>
								<div>
									<div className="certs-subtitle">
										SoftLine Traning Center, Moscow
									</div>
									<div className="certs-duration">2019</div>
								</div>
							</div>
						</div>
						<div className="certs">
							<div className="container">
								<div className="certs-title-row">
									<div>
										<img
											src={`${process.env.PUBLIC_URL}/cert-gen-3.png`}
											alt="twitter"
											className="certs-image"
										/>
									</div>
									<div className="certs-title-col-2  certs-title">
										Foundations of ITIL
									</div>
								</div>
								<div >
									<div className="certs-subtitle">
										IT Expert, Moscow
									</div>
									<div className="certs-duration">2015</div>
								</div>
							</div>
						</div>
						<div className="certs">
							<div className="container">
								<div className="certs-title-row">
									<div>
										<img
											src={`${process.env.PUBLIC_URL}/cert-hp-3.png`}
											alt="twitter"
											className="certs-image"
										/>
									</div>
									<div className="certs-title-col-2  certs-title">
										SM350 -Service Manager 9.x Advanced
									</div>
								</div>
								<div >
									<div className="certs-subtitle">
										HP Software Education, Moscow
									</div>
									<div className="certs-duration">2014</div>
								</div>
							</div>
						</div>
						<div className="certs">
							<div className="container">
								<div className="certs-title-row">
									<div>
										<img
											src={`${process.env.PUBLIC_URL}/cert-hp-3.png`}
											alt="twitter"
											className="certs-image"
										/>
									</div>
									<div className="certs-title-col-2 certs-title">
										SM320 -Service Manager 9.x
										Administration
									</div>
								</div>
								<div >
									<div className="certs-subtitle">
										HP Software Education, Moscow
									</div>
									<div className="certs-duration">2014</div>
								</div>
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Certs;
