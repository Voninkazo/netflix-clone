import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';

// import {seedDatabase} from './seed';

const config = {
    apiKey: "AIzaSyCcQxcp1NWgd2SQ8cm9ZYEkkQBzPSPits8",
    authDomain: "netflix-onja-sandy.firebaseapp.com",
    projectId: "netflix-onja-sandy",
    storageBucket: "netflix-onja-sandy.appspot.com",
    messagingSenderId: "525439312395",
    appId: "1:525439312395:web:b7abaafc92afec36a29d0e"
}

const firebase = window.firebase.initializeApp(config);
// seedDatabase(firebase)

ReactDOM.render(
	<>
		<FirebaseContext.Provider value={{ firebase: window.firebase }}>
			<GlobalStyles />
			<App />
		</FirebaseContext.Provider>
	</>,
	document.getElementById('root')
);
