import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";

class App extends Component {
	render() {
		return (
			<div className="app">
				<Button title="Click me!" style={Button.Style.Secondary} />
				<Button title="No, click me!" />
			</div>
		);
	}
}

export default App;
