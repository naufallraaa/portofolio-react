import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./gdg.png"
								alt="gdg"
								className="work-image"
							/>
							<div className="work-title">GDG On Campus Widyatama</div>
							<div className="work-subtitle">
								Co-lead Team Event
							</div>
							<div className="work-duration">2024 - 2025</div>
						</div>

						<div className="work">
							<img
								src="./gdg.png"
								alt="gdg-bandung"
								className="work-image"
							/>
							<div className="work-title">GDG Bandung</div>
							<div className="work-subtitle">
								Logistics Team
							</div>
							<div className="work-duration">April 2025 - Present</div>
						</div>

						<div className="work">
							<img
								src="./dbs.png"
								alt="dbs"
								className="work-image"
							/>
							<div className="work-title">Coding Camp Powered by DBS Foundation</div>
							<div className="work-subtitle">
								Frontend & Backend Cohort
							</div>
							<div className="work-duration">February - July 2025</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
