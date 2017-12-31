import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component {
	componentWillMount() {
		const config = {
	    	apiKey: 'AIzaSyARp5sq5Y33EnZjXjmnnnave8Aw0PP5_Wc',
	    	authDomain: 'manager-rn-ba0bb.firebaseapp.com',
	    	databaseURL: 'https://manager-rn-ba0bb.firebaseio.com',
	    	projectId: 'manager-rn-ba0bb',
	    	storageBucket: 'manager-rn-ba0bb.appspot.com',
	    	messagingSenderId: '517555109097'
	  	};

	  	firebase.initializeApp(config);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}> 
				<Router />
			</Provider>
		);
	}
}

console.ignoredYellowBox = ['Setting a timer']; 

export default App;
