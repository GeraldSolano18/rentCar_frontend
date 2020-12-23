
 import {Login} from '../pages/Login'
 import {Profile} from '../pages/Profile'
 import {Cars} from '../pages/Cars'
 import {Register} from '../pages/Register'
import {Main} from '../pages/Main';
import Layout from '../components/Layout'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
  <Layout>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/cars' component={Cars} />
        <Route exact path='/register' component={Register} />

      </Switch>
      </Layout>
  </BrowserRouter>
);

export default App;