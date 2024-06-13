import {
	IonBackButton,
	IonButton,
	IonButtons,
	IonContent,
	IonFooter,
	IonHeader,
	IonPage,
	IonRadio,
	IonRadioGroup,
	IonSearchbar,
	IonTitle,
	IonToolbar,
} from "@ionic/react";

import "./Country.css";
import { Group } from "@mantine/core";
import { useState } from "react";

function Country() {
	const [search, setSearch] = useState("");

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonBackButton defaultHref="#" />
					</IonButtons>
					<IonTitle>Country</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonSearchbar placeholder="Search" value={search} onIonInput={(e) => setSearch(e.target.value ?? "")} />
				<IonRadioGroup class="ml-5 flex flex-col">
					{countries
						.filter((country) =>
							country.name.toLowerCase().includes(search.toLowerCase()),
						)
						.map((country) => (
							<div key={country.value}>
								<IonRadio value={country.value} labelPlacement="end">
									{country.name}
								</IonRadio>
							</div>
						))}
				</IonRadioGroup>
			</IonContent>
			<IonFooter translucent>
				<IonToolbar>
					<Group grow mx={"sm"} my="xs">
						<IonButton size="large" shape="round">Siguiente</IonButton>
					</Group>
				</IonToolbar>
			</IonFooter>
		</IonPage>
	);
}

export default Country;

const countries = [
	{ name: "Argentina", value: "argentina" },
	{ name: "Bolivia", value: "bolivia" },
	{ name: "Brasil", value: "brasil" },
	{ name: "Chile", value: "chile" },
	{ name: "Colombia", value: "colombia" },
	{ name: "Costa Rica", value: "costa rica" },
	{ name: "Cuba", value: "cuba" },
	{ name: "Ecuador", value: "ecuador" },
	{ name: "El Salvador", value: "el salvador" },
	{ name: "Guatemala", value: "guatemala" },
	{ name: "Honduras", value: "honduras" },
	{ name: "México", value: "mexico" },
	{ name: "Nicaragua", value: "nicaragua" },
	{ name: "Panamá", value: "panama" },
	{ name: "Paraguay", value: "paraguay" },
	{ name: "Perú", value: "peru" },
	{ name: "Puerto Rico", value: "puerto rico" },
	{ name: "República Dominicana", value: "republica dominicana" },
	{ name: "Uruguay", value: "uruguay" },
	{ name: "Venezuela", value: "venezuela" },
];
