import React, { FC, Suspense } from 'react';
import Spinner from 'components/Spinner';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home'));
const Article = React.lazy(() => import('./pages/Article'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const Bookmarks = React.lazy(() => import('./pages/Bookmarks'));

const Fallback = () => (
  <div className="d-flex bg-light justify-content-center align-items-center vh-100 w-100">
    <Spinner />
  </div>
);

const App: FC<{}> = () => (
  <Router>
    <Suspense fallback={<Fallback />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/bookmarks" component={Bookmarks} />
        <Route exact path="/article/:slug" component={Article} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
