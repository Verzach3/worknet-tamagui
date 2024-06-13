import { IonPage, IonRouterOutlet, IonText } from "@ionic/react";
import Country from "./Country";
import { Redirect, Route } from "react-router";

function StartQuestionsIndex() {
	return (
		<>
			<Route exact path="/start-questions/country">
				<Country />
			</Route>
			<Route path="/start-questions">
				<Redirect to="/start-questions/country" />
			</Route>
		</>
	);
}

export default StartQuestionsIndex;
