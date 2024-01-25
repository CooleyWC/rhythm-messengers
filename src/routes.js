import App from './App';
import ErrorPage from './ErrorPage';
import Testemonials from './Testemonials'

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/testemonials',
        element: <Testemonials />,
        errorElement: <ErrorPage />
    }
]

export default routes;