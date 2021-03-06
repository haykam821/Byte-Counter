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
						if (target && target.value) {
							this.setState({
								total: {
									bytes: new Blob([target.value]).size,
									chars: target.value.length,
								},
							});
						}
					},
					onSelect: ({ target }) => {
						if (target && target.value && target.selectionStart && target.selectionEnd) {
							const selectedValue = target.value.substring(target.selectionStart, target.selectionEnd);
							this.setState({
								selected: {
									bytes: new Blob([selectedValue]).size,
									chars: selectedValue.length,
								},
							});
						}
					}
				}),
				elem("span", null, `Selected: ${this.state.selected.bytes} bytes, ${this.state.selected.chars} chars`),
				elem("span", null, `Total: ${this.state.total.bytes} bytes, ${this.state.total.chars} chars`),
			],
		});
	}
}
module.exports = App;
