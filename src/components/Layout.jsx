import React from 'react';
import '../assets/scss/styles.scss'
import {Header} from './Header';


const Layout = ({children}) => (
  <div className="App">
    <Header />
    {children}

  </div>
);

export default Layout;
