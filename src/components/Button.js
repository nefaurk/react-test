import React, { Component } from "react";
import "./Button.css";

class Button extends React.Component {
	static Style = {
		Primary: "primary", // Default style
		Secondary: "secondary",
		Text: "text"
	};
	static Variant = {
		Default: "default", // Default variant
		Toggle: "toggle",
		Dropdown: "dropdown"
	};
	
	render() {
		const title = this.props.title;
		let style = this.props.style;
		if (style == null) {
			style = Button.Style.Primary;
		}
		let variant = this.props.variant;
		if (variant == null) {
			variant = Button.Variant.Default;
		}
		let classes = "";
		classes += style;
		classes += " " + variant;
		const icon = this.props.icon;
		let iconElement = null;
		if (icon != null) {
			iconElement = <img className="svg icon" src={icon} />;
			classes += " icon";
		}
		let titleElement = null;
		if (title != null && title != "") {
			titleElement = <span className="label-small">{title}</span>;
		} else {
			classes += " no-title";
		}
		let dropdownIconElement = null;
		if (variant == Button.Variant.Dropdown) {
			dropdownIconElement = <img className="svg dropdown" src="images/assets/12x12-dropdown.svg" />;
		}
		return (
			<button className={classes}>{iconElement}{titleElement}{dropdownIconElement}</button>
		);
	}
}
export default Button;