/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { 
  HashRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import ResumePage from 'containers/ResumePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import GlobalStyle from '../../global-styles';
import AppWrapper from './AppWrapper';

/**
 * Componente que contextualiza e engloba toda a aplicação
 * apartir daqui as principais requisições são feitas.
 */
export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Oohscanner"
        defaultTitle="Oohscanner"
      >
        <meta name="description" content="Oohscanner" />
      </Helmet>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/resume" component={ResumePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </Router>
      <GlobalStyle />
    </AppWrapper>
  );
}
