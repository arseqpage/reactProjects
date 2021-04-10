// import clsx from 'classnames';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import routesConfig from '@routes/routesConfig';
import Header from '@components/Header';

import styles from './App.module.css';

const App = () => {
  /* Берется путь из navlink и в Route переход по компоненту */
  return (
    <>
      <BrowserRouter>
        <div className={styles.wrapper}>
          <Header />

          <Switch>
            {routesConfig.map((route, index) => (
              <Route
                key={`${route}_${index}`}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Switch>
        </div>

        {/* <Route path="" exact component={HomePage} />
        <Route path="/people" exact component={PeoplePage} /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
