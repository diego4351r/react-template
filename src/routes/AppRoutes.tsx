import { Suspense } from 'react';
import {
	BrowserRouter as Router,
	Navigate,
	Route,
	Routes
} from 'react-router-dom';
import { routes } from '~/routes/routes';
export default function AppRoutes() {
	return (
		<Suspense fallback={<span>Loading...</span>}>
			<Router>

			</Router>
		</Suspense>
	);
}