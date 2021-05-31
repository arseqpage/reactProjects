import HomePage from '@containers/HomePage';
import PeoplePage from '@containers/PeoplePage';
import PersonPage from '@containers/PersonPage';
import NotFoundPage from '@containers/NotFoundPage';
import FavoritePage from '@containers/FavoritePage';
import SearchPage from '@containers/SearchPage';
import ErrorMessage from '@components/ErrorMessage';

const routesConfig = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/people',
    exact: true,
    component: PeoplePage,
  },
  {
    path: '/people/:id',
    exact: true,
    component: PersonPage,
  },
  {
    path: '/not-found',
    exact: true,
    component: NotFoundPage,
  },
  {
    path: '/favorite',
    exact: true,
    component: FavoritePage,
  },
  {
    path: '/search',
    exact: true,
    component: SearchPage,
  },
  {
    path: '/fail',
    exact: true,
    component: ErrorMessage,
  },
  {
    path: '*',
    exact: false,
    component: NotFoundPage,
  },
];

export default routesConfig;
