import App from './App';
import ErrorPage from './ErrorPage';
import Testemonials from './Testemonials'

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children:[
          
        ]

    },
    {
      path:'/:id',
      element:<App />
    },
    {
        path: '/Testemonials',
        element: <Testemonials />
    }

]

export default routes;