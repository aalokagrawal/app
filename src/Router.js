import React from 'react';
import { BrowserRouter, Route , Switch} from 'react-router-dom';

import Home from './Home';
import App from './App';
import Participants from './Participants';

function Router(){
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
    <Route exact path ="/" component={Home} />
    <Route  path="/subjects" component={App} />
    <Route  path="/participants" component={Participants} />
    </Switch></BrowserRouter>
);
}

export default Router;