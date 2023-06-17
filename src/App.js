import React from 'react';

import Header from './Header';
import Main from './Main';

import './App.scss';
import './Global.scss';


const App = () => {
	return (

		<div className='app-container'>
			<div className='app-background-color'>
				<div className='app-background-color-right' />
			</div>
			<div className='app-details'>
				<Header />
				<Main />
			</div>
		</div>
	);
};

export default App;
