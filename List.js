import React, { Component } from 'react';
import {
  ListView,       // Renders a list
  RefreshControl, // Refreshes the list on pull down
  Text
} from 'react-native';

import Row from './Row';
var REQUEST_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=a667a62ffce29c5d1c5211e316ae43f6';
var REQUEST_URL_BASE_IMG = 'https://image.tmdb.org/t/p/w154/'

export default class List extends Component {

  /**
   * Store the data for ListView
   */
  state = {
      // ListView DataSource object
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      id: "",
      // Used for RefreshControl
      isRefreshing: false,
    }

  componentDidMount() {
  this._fetchData();
  }

  _fetchData = () => {
    this.setState({isRefreshing:true});
    fetch(REQUEST_URL)
          .then((response) => response.json())
          .then((responseData) =>
          {
            this.setState({
              dataSource: this.state.dataSource.cloneWithRows(responseData.results),
              id: responseData.results.id,
              loaded: true,
              isRefreshing : false,
          });
          }).done();
  }

  /**
   * Render a row
   */
   _renderRow = (movie) => {
        console.log("in renderRow")
      return (
         <Row
           // Pass movie object
           movie={movie}
           // Pass a function to handle row presses
           onPress={()=>{
             // Navigate to a separate movie detail screen
             this.props.navigator.push({
               name: 'movie',
               movie: movie,

             });
           }}
         />
       );
     }

  /**
   * Renders the list
   */
   render() {
      return (
        <ListView
        // Data source from state
          dataSource={this.state.dataSource}
          // Row renderer method
          renderRow={this._renderRow}
          // Refresh the list on pull down
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this._fetchData}
            />
          }
        />
      );
    }
}