
// import {Login} from '../Pages/Login'
// import {Register} from '../Pages/Register'
import {Main} from '../pages/Main';
import Layout from '../components/Layout'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
  <Layout>
      <Switch>
        <Route exact path='/' component={Main} />
        {/* <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} /> */}

      </Switch>
      </Layout>
  </BrowserRouter>
);

export default App;