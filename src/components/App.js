import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      secondName: "",
      result: "",
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClearhandler = this.onClearhandler.bind(this);
    this.onCalculatehandler = this.onCalculatehandler.bind(this);
    this.matching = this.matching.bind(this);
  }
  onChangeHandler(event) {
    console.log(event.target.name, event.target.value);
    let list = { ...this.state };
    list[event.target.name] = event.target.value;
    this.setState(list);
  }
  matching(s1, s2) {
    let obj = {};
    let count = 0;
    for (let i = 0; i < s1.length; i++) {
      if (obj[s1[i]]) {
        obj[s1[i]] += 1;
      } else {
        obj[s1[i]] = 1;
      }
    }
    for (let i = 0; i < s2.length; i++) {
      if (obj[s2[i]]) {
        obj[s2[i]] -= 1;
        count++;
      }
      if (obj[s2[i]] == 0) {
        delete obj[s2[i]];
      }
    }
    return count;
  }
  onCalculatehandler() {
    if (!this.state.firstName || !this.state.secondName) {
      this.setState({
        ...this.state,
        result: "Please Enter valid input",
      });
    } else {
      let match =
        this.matching(this.state.firstName, this.state.secondName) * 2;
      console.log(match);

      let result =
        this.state.firstName.length + this.state.secondName.length - match;
      console.log(this.state.firstName.length + this.state.secondName.length);
      if (result % 6 == 1) {
        this.setState({
          ...this.state,
          result: "Friends",
        });
      } else if (result % 6 == 2) {
        this.setState({
          ...this.state,
          result: "Love",
        });
      } else if (result % 6 == 3) {
        this.setState({
          ...this.state,
          result: "Affection",
        });
      } else if (result % 6 == 4) {
        this.setState({
          ...this.state,
          result: "Marriage",
        });
      } else if (result % 6 == 5) {
        this.setState({
          ...this.state,
          result: "Enemy",
        });
      } else {
        this.setState({
          ...this.state,
          result: "Siblings",
        });
      }
    }
  }
  onClearhandler() {
    this.setState({
      firstName: "",
      secondName: "",
      result: "",
    });
  }
  render() {
    return (
      <div id="main">
        FirstName:
        <input
          name="firstName"
          data-testid="input1"
          value={this.state.firstName}
          onChange={this.onChangeHandler}
          type="text"
        />
        SecondName:
        <input
          name="secondName"
          data-testid="input2"
          value={this.state.secondName}
          onChange={this.onChangeHandler}
          type="text"
        />
        <button
          onClick={this.onCalculatehandler}
          data-testid="calculate_relationship"
        >
          Calculate Relationship Future
        </button>
        <button onClick={this.onClearhandler} data-testid="clear">
          Clear
        </button>
        <h3 data-testid="answer"> {this.state.result}</h3>
      </div>
    );
  }
}

export default App;
