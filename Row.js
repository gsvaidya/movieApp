import React, { Component } from 'react';
import {
  Image,              // Renders background image
  StyleSheet,         // CSS-like styles
  Text,               // Renders text
  TouchableOpacity,   // Handles row presses
  View                // Container component
} from 'react-native';
import Dimensions from 'Dimensions';
import List from './List'
// Detect screen size to calculate row height
const screen = Dimensions.get('window');

export default class Row extends Component {

//componentDidMount(){
// this.fetchData2();
// }
//
// fetchData2(movie){
// fetch('https://api.themoviedb.org/3/movie/'+movie.id+'/credits?api_key=a667a62ffce29c5d1c5211e316ae43f6')
//        .then((response) => response.json())
//        .then((responseJson) => {
//          cast: responseJson.cast
//        });
//        console.log(cast[0].name);
// }


  // Extract movie and onPress props passed from List component
render({ movie, onPress} = this.props) {
    // Extract values from movie object
    //console.log(id);
    const { title,vote_average,poster_path, id } = movie;
    return (
      // Row press handler
      <TouchableOpacity
        // Pass row style
        style={styles.row}
        // Call onPress function passed from List component when pressed
        onPress={onPress}
        // Dim row a little bit when pressed
        activeOpacity={0.5}
      >
        <View style={styles.container}>
         <Image
          source={{uri: 'https://image.tmdb.org/t/p/w154/'+ movie.poster_path.replace(/\//g,"")}}
          style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
          <Text style={styles.title,styles.text}>{movie.title}</Text>
          <Text style={styles.year,styles.text}>User Rating- {movie.vote_average*10}%</Text>
          </View>
          </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
    //container
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#157',
      },
        //right box
      rightContainer: {
          flex: 1,

        },

    // Row
    row: {
      paddingBottom: 4,                   // Add padding at the bottom
    },
    // Background image
    thumbnail: {
        width: 180,
        height: 81,
      height: screen.height / 4,          // Divide screen height by 3
//      justifyContent: 'center',           // Center vertically
//      alignItems: 'center',               // Center horizontally
    },
    // Shared text style
    text: {
      color: '#F5FCFF',                      // White text color
      marginLeft: 23,
      fontWeight: 'bold',                 // Bold font
      fontSize: 23,
      justifyContent:'center',
      alignItems: 'center',

      // Add text shadow
      textShadowColor: '#555',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 4,
    },
    // Movie title
    title: {
      fontSize: 34,                       // Bigger font size
      fontFamily: 'verdana',
      alignItems: 'center',

    },
    // Rating row
    vote_average: {
      flexDirection: 'row',               // Arrange icon and rating in one line
    },
    // Certified fresh icon
    icon: {
      width: 22,                          // Set width
      height: 22,                         // Set height
      marginRight: 5,                     // Add some margin between icon and rating
    },
    // Rating value
    value: {
      fontSize: 25,                       // Smaller font size
    },
  });
