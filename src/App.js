import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";

import Button from "./components/Button";

const styles = StyleSheet.create({
	app: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		padding: "16px",
	},
});

class App extends Component {
	render() {
		return (
			<div className={css(styles.app)}>
				<Button title="Click me!" style={Button.Style.Secondary} />
				<Button title="No, click me!" />
			</div>
		);
	}
}

export default App;
