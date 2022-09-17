import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Cart from '~/pages/Cart';
import Category from '~/pages/Category';
import Profile from '~/pages/Profile';
// import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Shop from '~/pages/Shop';
import Favorites from '~/pages/Favorites';



// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home},
    { path: config.routes.cart, component: Cart },
    { path: config.routes.category, component: Category },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.shop, component: Shop },
    // { path: config.routes.upload, component: Upload, layout: HeaderOnly null },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.favorites, component: Favorites, layout: HeaderOnly},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
