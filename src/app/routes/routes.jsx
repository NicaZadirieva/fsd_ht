import { Layout } from "../layout"
import { HomePage } from "../../pages"
import { createBrowserRouter } from "react-router"

export const router = createBrowserRouter([
	{
		path: '/',
		Component: Layout,
		children: [
			{ index: true, Component: HomePage }
		]
	}
])