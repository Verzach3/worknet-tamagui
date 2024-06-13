import {
	IonTabs,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonIcon,
	IonLabel,
} from "@ionic/react";
import { triangle, ellipse, square } from "ionicons/icons";
import { Redirect, Route } from "react-router";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";

function HomeIndex() {
	return (
		<IonTabs>
			<IonRouterOutlet>
				<Route exact path="/home/tab1">
					<Tab1 />
				</Route>
				<Route exact path="/home/tab2">
					<Tab2 />
				</Route>
				<Route path="/home/tab3">
					<Tab3 />
				</Route>
				<Route exact path="/home">
					<Redirect to="/home/tab1" />
				</Route>
			</IonRouterOutlet>
			<IonTabBar slot="bottom">
				<IonTabButton tab="tab1" href="/home/tab1">
					<IonIcon aria-hidden="true" icon={triangle} />
					<IonLabel>Tab 1</IonLabel>
				</IonTabButton>
				<IonTabButton tab="tab2" href="/home/tab2">
					<IonIcon aria-hidden="true" icon={ellipse} />
					<IonLabel>Tab 2</IonLabel>
				</IonTabButton>
				<IonTabButton tab="tab3" href="/home/tab3">
					<IonIcon aria-hidden="true" icon={square} />
					<IonLabel>Tab 3</IonLabel>
				</IonTabButton>
			</IonTabBar>
		</IonTabs>
	);
}

export default HomeIndex;
