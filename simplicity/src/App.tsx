import React, { FC, Suspense } from 'react'
import Spinner from 'components/Spinner'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Home = React.lazy(() => import('./pages/Home'))

type AppProps = {}

const App: FC<AppProps> = () => (
  <Router>
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Suspense>
  </Router>
)

export default App
