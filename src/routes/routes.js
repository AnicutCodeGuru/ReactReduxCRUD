import { Switch, Route } from 'react-router-dom'
import CompanyListPage from  "../container/Company/CompanyListPage" ;
import CreateCompanyPage from  "../container/Company/CreateCompanyPage" ;
import ActivityListPage from  "../container/Activity/CreateActivityPage" ;
import CreateRecordedActivityPage from  "../container/RecordActivity/CreateRecordedActivityPage" ;
import React from 'react';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/newactivity' component={ActivityListPage}/>
      <Route exact path='/newcompany' component={CreateCompanyPage}/>
      <Route exact path='/recordact' component={CreateRecordedActivityPage}/>
    </Switch>
  </main>
)

export default Main;