import React, { Component } from "react";
import { Provider } from "./context-redux";
import Demo from "./components/demo";

class App extends Component {
	render() {
		return (
			<Provider>
				<Demo />
				<Demo />
			</Provider>
		);
	}
}

export default App;
