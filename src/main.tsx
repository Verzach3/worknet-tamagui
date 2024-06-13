import "@mantine/core/styles.css";

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { config } from "telefunc/client";
import { MantineProvider } from "@mantine/core";
config.telefuncUrl = "http://verzach3-pc.tailfb324.ts.net:3000/_telefunc";
const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);
root.render(
	<React.StrictMode>
		<MantineProvider>
			<App />
		</MantineProvider>
	</React.StrictMode>,
);
