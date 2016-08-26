import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router';


/**
 * Styles
 **/
require('./src/scss/general.scss');
require('./src/scss/layout.scss');

/**
 * Components / pages
 **/
import Layout from './src/pages/layout';
import Home from './src/pages/home';
import Gallery from './src/pages/gallery';
import About from './src/pages/about';


/**
 * App
 **/
export default class App extends React.Component {
  render() {
    return(
			<Router history={hashHistory}>
				<Route path='/' component={Layout}> // if route path is '/' then load <Layout />
          <IndexRoute component={Home} /> // load <Home /> inside <Layout />
          <Route path='gallery' component={Gallery} /> // if route path is '/gallery' then load <Gallery />
          <Route path='about' component={About} /> // if route path is '/about' then load <About />
        </Route>
			</Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
