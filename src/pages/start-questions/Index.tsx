import { IonPage, IonRouterOutlet, IonText } from "@ionic/react";
import Country from "./Country";
import { Redirect, Route } from "react-router";
import Job from "./job/job";
import Jobtype from "./typejob/jobtype";

function StartQuestionsIndex() {
	return (
		<>
			<Route exact path="/start-questions/country">
				<Country />
			</Route>
			<Route exact path="/start-questions/job">
				<Job />
			</Route>
			<Route exact path="/start-questions/typejob">
				<Jobtype />
			</Route>
		</>
	);
}

export default StartQuestionsIndex;
