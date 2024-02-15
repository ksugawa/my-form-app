import PATH from './utils/path';
import Home from './pages/Home';
import Register from './pages/Register/Form';
import Confirm from './pages/Register/Confirm';


const routes = [
    {
        path: PATH.HOME,
        component: Home,
    },
    {
        path: PATH.REGISTER,
        component: Register,
    },
    {
        path: PATH.CONFIRM,
        component: Confirm,
    },
];

export default routes;