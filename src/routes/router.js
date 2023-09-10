import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import RootPage from "../pages/Root";
import AuthenticationPage, {action as authAction} from "../pages/Authentication";
import ProfilePage from "../pages/Profile";
import ImageDetailsPage from "../pages/ImageDetails";
import ImageGrid from "../components/ImageGrid";
import UserInfo from "../components/UserInfo";

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
                element: <ProfilePage />,
                children: [
                    {
                        index: true,
                        element: <ImageGrid />
                    },
                    {
                        path: 'about',
                        element: <UserInfo />
                    },
                ]
            },
            {
                path: 'logout',
                element: <ImageDetailsPage />
            },
        ]
    },
    {
        path: 'auth',
        element: <AuthenticationPage />,
        action: authAction
    },
])