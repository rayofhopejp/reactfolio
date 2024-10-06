import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import History from "../components/homepage/history";
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
			<div className="page-content">
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-profile">
								<div className="title about-title">
									Profile
								</div>
								<div className="about-subtitle">
									<div className="section">Name</div>
									<div className="normaltext">{INFO.about.Name}</div>
								</div>
								<div className="about-subtitle">
									<div className="section">Abstract</div>
									<div className="normaltext">{INFO.about.Abstract}</div>
								</div>
								<div className="about-subtitle">
									<div className="section">Belief</div>
									<div className="normaltext">
										<ul>
										{INFO.about.Belief.map((data, index) => (
												<li key={(index + 1).toString()}>{data.title} - {data.description}</li>
										))}
										</ul>
									</div>
								</div>
								<div className="about-subtitle">
									<div className="section">History</div>
									{INFO.about.Affiliation.map((data, index) => (
										<div
											className=".about-affiliation"
											key={(index + 1).toString()}
										>
											<History
												key={(index + 1).toString()}
												date={data.date}
												title={data.place}
												description={data.description}
												link={undefined}
											/>
										</div>
									))}
								</div>
								<div className="about-subtitle">
									<div className="section">Specialty</div>
									<div className="normaltext">
										<ul>
										{INFO.about.Speciality.map((data, index) => (
												<li key={(index + 1).toString()}>{data}</li>
										))}
										</ul>
									</div>
								</div>
								<div className="about-subtitle">
									<div className="section">Certificate</div>
									<div className="normaltext">
										<ul>
										{INFO.about.Certificate.map((data, index) => (
												<li key={(index + 1).toString()}>{data}</li>
										))}
										</ul>
									</div>
								</div>
								<div className="about-subtitle">
									<div className="section">Awards</div>
									{INFO.about.Awards.map((data, index) => (
										<div
											className=".about-history"
											key={(index + 1).toString()}
										>
											<History
												key={(index + 1).toString()}
												date={data.date}
												title={data.title}
												description={data.description}
												link={data.link}
											/>
										</div>
									))}
								</div>
								<div className="about-subtitle">
									<div className="section">Stages</div>
									{INFO.about.Stage.map((data, index) => (
										<div
											className=".about-publications"
											key={(index + 1).toString()}
										>
											<History
												key={(index + 1).toString()}
												date={data.date}
												title={data.title}
												description={data.description}
												link={data.link}
											/>
										</div>
									))}
								</div>
								<div className="about-subtitle">
									<div className="section">Publications</div>
									{INFO.about.Publications.map((data, index) => (
										<div
											className=".about-publications"
											key={(index + 1).toString()}
										>
											<History
												key={(index + 1).toString()}
												date={data.date}
												title={data.title}
												description={data.description}
												link={data.link}
											/>
										</div>
									))}
								</div>
								<div className="about-subtitle">
									<div className="section">Projects</div>
									{INFO.about.Projects.map((data, index) => (
										<div
											className=".about-history"
											key={(index + 1).toString()}
										>
											<History
												key={(index + 1).toString()}
												date={data.date}
												title={data.title}
												description={data.description}
												link={data.link}
											/>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
