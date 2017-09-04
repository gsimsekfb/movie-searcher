import React from 'react';
import {
  AppRegistry,  
  StyleSheet, 
  Text, 
  View ,
  Dimensions, 
  TextInput,
  ScrollView
} from 'react-native';

import ImageElement from './app/components/ImageElement.js';

/* Todos
  - rename ImageElement to MovieElement
  - imageWrapper paddings not working

  Source: https://www.youtube.com/watch?v=6fqwWwHwC6U&t=125s
*/

const ALL_MOVIES = Object.freeze(
  [
      { title: 'seinfeld', img: require('./app/img/seinfeld.png')},
      { title: 'scarface', img: require('./app/img/scarface.png')},
      { title: 'batman', img: require('./app/img/batman.png')},
      { title: 'inception', img: require('./app/img/inception.png')},
      { title: 'matrix', img: require('./app/img/matrix.png')},
      { title: 'interstellar', img: require('./app/img/interstellar.png')},      
  ]
);

export default class App extends React.Component {

  state = {
    moviesToShow: [],
  }  

  componentDidMount() {
    this.setState({ moviesToShow: ALL_MOVIES });
  }

  search(text) {
    let moviesFound = [];
    for(const movie of ALL_MOVIES) {
      if(movie.title.startsWith(text)) 
        moviesFound.push(movie);    
    }

    // Show movies found
    if(moviesFound.length > 0)
      this.setState({ moviesToShow: moviesFound });   
    // No text input, show all movies
    else if(!text)
      this.setState({ moviesToShow: ALL_MOVIES}); 
    // No movies found, show nothing
    else if(text && moviesFound.length == 0)
      this.setState({ moviesToShow: []}); 

    //alert('searching');
  }

  render() {
    const moviesToShow = this.state.moviesToShow.map((val, key) => {
      return <View key={key} style={styles.imagewrap} >
               <ImageElement imgsource={val.img} />
             </View>
    });

    return (
      <View style={styles.container}>      
        <TextInput style={styles.textInput} underlineColorAndroid='blue'
                   placeholder='search movie' 
                   onChangeText={ (text) => this.search(text) } 
        /> 
        <ScrollView>                   
        <View style={styles.photogrid}>
          {moviesToShow}
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    // backgroundColor: '#252525',
    paddingTop: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  textInput: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 8,
    padding: 10,    
  },
  photogrid : {
    flex:1,
    padding: 2,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  imagewrap : {
    padding: 2,
    //height: 120,
    width: (Dimensions.get('window').width / 2) - 2
  }   
});
