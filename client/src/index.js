import React from 'react';
import ReactDom from 'react-dom';
import {browserHistory, Router} from 'react-router';
import routes from './config/routes.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


ReactDom.render(
  (
    <MuiThemeProvider>
      <Router history={browserHistory} routes={routes} />
    </MuiThemeProvider>
  ),
  document.getElementById('react-app')
);
