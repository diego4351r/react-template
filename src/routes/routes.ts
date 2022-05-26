import { LazyExoticComponent } from "react";

export interface Route {
	to: string;
	path: string;
	Component: LazyExoticComponent<JSXComponent> | JSXComponent;
	name: string;
}

type JSXComponent = () => JSX.Element;

export const routes: Route[] = [

]