import React from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import {createHashHistory} from 'history'

import Home from './Home';
import SearchPage from './SearchPage';
import Aboutpage from './Aboutus';



const Routes = () =>{
return (
  <Switch >
    <Route component={SearchPage}  path={'/'} exact />
    <Route component={Aboutpage}  path={'/Aboutus'} exact/>
    <Route component={SearchPage}  path={'/SearchPage'} exact/>
    <Route/>
  </Switch>
)
}

export default withRouter(Routes);
