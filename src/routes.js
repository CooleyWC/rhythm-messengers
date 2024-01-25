import App from './App';
import ErrorPage from './ErrorPage';
import Testemonials from './Testemonials'
import About from './about/About'
import Contact from './contact/Contact';

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/testemonials',
                element: <Testemonials />
            }
        ]
    }
]

export default routes;