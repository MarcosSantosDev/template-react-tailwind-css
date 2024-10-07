import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router-dom';

import routePaths from '@/router/config/routePaths';

import RouteErrorElementFallback from './RouteErrorElementFallback';

const notFoundMessage = 'Desculpe, não conseguimos encontrar a página que você tentou acessar';

const RouteErrorElement = () => {
	const navigate = useNavigate();
	const error = useRouteError();

	const handleGoToHomePage = () => {
		navigate(routePaths.ROOT);
	};

	if (isRouteErrorResponse(error)) {
		const title = error.status.toString();
		const subtitle = error.status === 404 ? notFoundMessage : error.statusText;

		return (
			<RouteErrorElementFallback
				title={title}
				subtitle={subtitle}
				onGoToHomePage={handleGoToHomePage}
			/>
		);
	}

	throw error;
};

export default RouteErrorElement;
