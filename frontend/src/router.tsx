import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Chat from './pages/chat';
import Home from './pages/home';

// Define the routes
const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/chat',
		element: <Chat />,
	},
]);

const Routes: React.FC = () => {
	return <RouterProvider router={router} />;
};

export default Routes;
