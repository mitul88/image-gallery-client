import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import RootPage from "../pages/Root";
import AuthenticationPage, {action as authAction} from "../pages/Authentication";
import ProfilePage, {loader as profileLoader} from "../pages/Profile";
import ImageDetailsPage from "../pages/ImageDetails";
import UserInfo from "../pages/UserInfo";
import Settings from "../pages/Settings";
import UploadImagePage from "../pages/UploadImage";
import UserPhotoPage, {loader as userPhotoLoader} from "../pages/UserPhoto";
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
                path: ':userId/profile',
                element: <ProfilePage />,
                id:"user",
                loader: profileLoader,
                children: [
                    {
                        index: true,
                        element: <UserPhotoPage />,
                        loader: userPhotoLoader
                    },
                    {
                        path: 'about',
                        element: <UserInfo />
                    },
                    {
                        path: 'upload',
                        element: <UploadImagePage />,
                        loader: checkAuthLoader,
                    },
                    {
                        path: 'settings',
                        element: <Settings />,
                        loader: checkAuthLoader,
                    },
                ]
            },
            {
                path: 'image/:imageId',
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