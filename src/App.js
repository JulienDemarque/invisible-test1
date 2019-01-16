import React, { Component } from "react";
import { Flipper } from "react-flip-toolkit";
import Item from "./Item";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      listItems: []
    };
    this.textInput = React.createRef();
  }

  handleInputChange = e => {
    this.setState({ inputText: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const alreadyThere = this.state.listItems.find(
      item => item === this.state.inputText.toUpperCase()
    );
    if (this.state.inputText && !alreadyThere) {
      this.setState(({ inputText, listItems }) => ({
        listItems: [...listItems, inputText.toUpperCase()],
        inputText: ""
      }));
    }
    console.log(this.textInput.current.focus());
  };

  handleRemove = e => {
    const itemToRemove = e.currentTarget.name;
    this.setState(({ listItems }) => {
      listItems = listItems.filter(item => item !== itemToRemove);
      return { listItems };
    });
  };

  render() {
    return (
      <div className="App">
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className="form__input"
            value={this.state.inputText}
            onChange={this.handleInputChange}
            ref={this.textInput}
          />
          <button className="form__button" type="submit">
            ADD
          </button>
        </form>
        <Flipper flipKey={this.state.listItems.join("")}>
          <ul className="list">
            {this.state.listItems.map((item, index) => (
              <Item
                flipId={item}
                item={item}
                key={item}
                index={index}
                handleRemove={this.handleRemove}
              />
            ))}
          </ul>
        </Flipper>
      </div>
    );
  }
}

export default App;
