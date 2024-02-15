import PATH from './utils/path';
import Home from './pages/Home';
import Register from './pages/Register';

const routes = [
    {
        path: PATH.HOME,
        component: Home,
    },
    {
        path: PATH.REGISTER,
        component: Register,
    },
];

export default routes;