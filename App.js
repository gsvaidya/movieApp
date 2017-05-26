import React, { Component } from 'react';
import {    // Allows to navigate between different screens
  StatusBar,    // Allows to hide the status bar
  Text
} from 'react-native';

import NavigationExperimental from 'react-native-deprecated-custom-components';
import List from './List';
import Movie from './Movie';

const RouteMapper = (route, navigationOperations, onComponentRef) => {
  if (route.name === 'list') {
    return (
      // TODO: Add List component
      <List navigator = {navigationOperations}/>
    );
  } else if (route.name === 'movie') {
        return (
          <Movie
            // Pass movie object passed with route down as a prop
            movie={route.movie}
            // Pass navigationOperations as navigator prop
            navigator={navigationOperations}
          />
        );
      }
};

export default class App extends Component {
  componentDidMount() {
    // Hide the status bar
    StatusBar.setHidden(true);
  }

  render() {
    return (
      // Handle navigation between screens
      <NavigationExperimental.Navigator
        // Default to list route
        initialRoute={{name: 'list'}}
        // Use FloatFromBottom transition between screens
        configureScene={(route, routeStack) => NavigationExperimental.Navigator.SceneConfigs.FloatFromBottom}
        // Pass a route mapper functions
        renderScene={RouteMapper}
      />
    );
  }
}