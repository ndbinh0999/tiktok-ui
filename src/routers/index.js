import HomePage from '../pages/Home';
import FollowingPage from '../pages/Following';
import Upload from '../pages/Upload';
import HeaderOnly from '../components/Layout/HeaderOnly';
import Search from '../pages/Search';

export const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/following', component: FollowingPage },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];
export const privateRoutes = [];
