import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import RootPage from "../pages/Root";
import AuthenticationPage, {action as authAction} from "../pages/Authentication";
import ProfilePage from "../pages/Profile";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />,
        errorElement: <p>Error Occured</p>,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'profile',
                element: <ProfilePage />
            }
        ]
    },
    {
        path: 'auth',
        element: <AuthenticationPage />,
        action: authAction
    }
])