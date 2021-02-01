import React, { FC, Suspense } from 'react';
import Spinner from 'components/Spinner';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home'));
const Article = React.lazy(() => import('./pages/Article'));

const App: FC<{}> = () => (
  <Router>
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:slug" component={Article} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
