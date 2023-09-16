import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import RootPage from "../pages/Root";
import AuthenticationPage, {action as authAction} from "../pages/Authentication";
import ProfilePage from "../pages/Profile";
import ImageDetailsPage from "../pages/ImageDetails";
import UserInfo from "../pages/UserInfo";
import Settings from "../pages/Settings";
import UploadImagePage from "../pages/UploadImage";
import UserPhotoPage from "../pages/UserPhoto";
import { checkAuthLoader, loadToken } from "../utils/auth";
import { action as logoutAction } from "../pages/Logout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />,
        errorElement: <p>Error Occured</p>,
        id: 'root',
        loader: loadToken,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'profile',
                element: <ProfilePage />,
                loader: checkAuthLoader,
                children: [
                    {
                        index: true,
                        element: <UserPhotoPage />
                    },
                    {
                        path: 'about',
                        element: <UserInfo />
                    },
                    {
                        path: 'upload',
                        element: <UploadImagePage />
                    },
                    {
                        path: 'settings',
                        element: <Settings />
                    },
                ]
            },
            {
                path: 'image',
                element: <ImageDetailsPage />
            },
            {
                path: 'logout',
                action: logoutAction
            },
        ]
    },
    {
        path: 'auth',
        element: <AuthenticationPage />,
        action: authAction
    },
])