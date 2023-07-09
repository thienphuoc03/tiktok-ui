import { HeaderOnly } from '~/components/Layouts';
import {
  HomePage,
  FollowingPage,
  ProfilePage,
  UploadPage,
  SearchPage,
} from '~/pages';

const publicRoutes = [
  { path: '/', name: 'Home', element: <HomePage /> },
  { path: '/following', name: 'Following', element: <FollowingPage /> },
  { path: '/profile', name: 'Profile', element: <ProfilePage /> },
  {
    path: '/upload',
    name: 'Upload',
    element: <UploadPage />,
    layout: HeaderOnly,
  },
  {
    path: '/search',
    name: 'Search',
    element: <SearchPage />,
    layout: null,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
