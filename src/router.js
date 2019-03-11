import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Extension from './routes/Extension'
import Millimeter from './routes/Millimeter';
import Ecm from './routes/Ecm';
import Sdlc_2 from './routes/SdlcTwo';
import SdlcTwo from './routes/SdlcTwo';
import RadarL from './routes/RadarL';
import RadarXku from './routes/Xku';
import Xku from './routes/Xku';
import Sc from './routes/Sc';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Extension} />
        {/* <Route path="/" exact component={Ecm} /> */}
          {/* <Route path="/" exact component={SdlcTwo}/> */}
          {/* <Route path="/" exact component={RadarL}/> */}
          {/* <Route path="/" exact component={Xku}/> */}
          {/* <Route path="/" exact component={Sc}/> */}
               {/* <Route path='/' exact component={Millimeter}/> */}

      </Switch>
    </Router>
  );
}

export default RouterConfig;
