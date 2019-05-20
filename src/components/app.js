const React = require("react");
const elem = React.createElement;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: {
				bytes: 0,
				chars: 0,
			},
			total: {
				bytes: 0,
				chars: 0,
			},
		};
	}

	render() {
		return elem("div", {
			children: [
				elem("textarea", {
					onInput: ({ target }) => {
						this.setState({
							total: {
								bytes: 0,
								chars: target.length,
							},
						});
					},
				}),
				elem("span", null, `Selected: ${this.state.selected.bytes} bytes, ${this.state.selected.chars} chars`),
				elem("span", null, `Total: {this.state.total.bytes} bytes, ${this.state.total.chars} chars`),
			],
		});
	}
}
module.exports = App;
