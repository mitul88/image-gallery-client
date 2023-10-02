import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

// import RootPage from "../pages/Root";
// import Error from "../pages/Error";

// import HomePage, {loader as categoryLoader} from "../pages/Home";
// import ProfilePage, {loader as profileLoader} from "../pages/Profile";
// import UserPhotoPage from "../pages/UserPhoto";
// import UserInfo from "../pages/UserInfo";
// import Settings from "../pages/Settings";
// import UploadImagePage from "../pages/UploadImage";
// import ImageDetailsPage, {loader as imageDetailsLoader} from "../pages/ImageDetails";
// import { loadToken } from "../utils/auth";
// import AuthenticationPage, {action as authAction} from "../pages/Authentication";
// import { action as logoutAction } from "../pages/Logout";


const RootPage = lazy(() => import('../pages/Root'))
const Error = lazy(() => import('../pages/Error'))
const HomePage = lazy(() => import('../pages/Home'))
const ProfilePage = lazy(() => import('../pages/Profile'))
const UserPhotoPage = lazy(() => import('../pages/UserPhoto'))
const UserInfo = lazy(() => import('../pages/UserInfo'))
const Settings = lazy(() => import('../pages/Settings'))
const UploadImagePage = lazy(() => import('../pages/UploadImage'))
const ImageDetailsPage = lazy(() => import('../pages/ImageDetails'))
const AuthenticationPage = lazy(() => import('../pages/Authentication'))



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Suspense fallback={<p>Loading...</p>}><RootPage /></Suspense>,
        errorElement: <Suspense fallback={<p>Loading...</p>}><Error /></Suspense>,
        id: 'root',
        loader: () => import('../utils/auth').then(module=> module.loadToken()),
        children: [
            {
                index: true,
                element: <Suspense fallback={<p>Loading...</p>}><HomePage /></Suspense>,
                loader: (meta) => import('../pages/Home').then(module=> module.loader(meta))
            },
            {
                path: ':userId/profile',
                element: <Suspense fallback={<p>Loading...</p>}><ProfilePage /></Suspense>,
                id:"user",
                loader: (meta) => import('../pages/Profile').then(module=> module.loader(meta)),
                children: [
                    {
                        index: true,
                        element: <Suspense fallback={<p>Loading...</p>}><UserPhotoPage /></Suspense>,
                    },
                    {
                        path: 'about',
                        element: <Suspense fallback={<p>Loading...</p>}><UserInfo /></Suspense>
                    },
                    {
                        path: 'upload',
                        element: <Suspense fallback={<p>Loading...</p>}><UploadImagePage /></Suspense>,
                        loader: () => import('../utils/auth').then(module=> module.checkAuthLoader()),
                    },
                    {
                        path: 'settings',
                        element: <Suspense fallback={<p>Loading...</p>}><Settings /></Suspense>,
                        loader: () => import('../utils/auth').then(module=> module.checkAuthLoader()),
                    },
                ]
            },
            {
                path: 'image/:imageId/:slug',
                element: <Suspense fallback={<p>Loading...</p>}><ImageDetailsPage /></Suspense>,
                loader: (meta) => import('../pages/ImageDetails').then(module=> module.loader(meta))
            },
            {
                path: 'logout',
                action: () => import('../pages/Logout').then(module=> module.action())
            },
        ]
    },
    {
        path: 'auth',
        element: <Suspense fallback={<p>Loading...</p>}><AuthenticationPage /></Suspense>,
        action: (meta) => import('../pages/Authentication').then(module=> module.action(meta))
    },
])