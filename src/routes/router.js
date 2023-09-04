import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import RootPage from "../pages/Root";
import AuthenticationPage from "../pages/Authentication";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />,
        errorElement: <p>Error Occured</p>,
        children: [
            {
                index: true,
                element: <HomePage />
            }
        ]
    },
    {
        path: 'auth',
        element: <AuthenticationPage />
    }
])