import React, { Component } from "react";
import Calendar from "./calendar";
import { stringify } from "query-string";
import config, { calendarId, baseUrl } from "./config";

export default class App extends Component {
  state = {
    isError: false,
    items: null,
    filter: null
  };

  componentDidMount() {
    this.load();
  }

  handleSetFilter = e => {
    this.setState({
      filter: e.target.value
    });
  };

  load = async () => {
    if (!this.props.fullScreen) {
      config.maxResults = 5;
    }

    const requestUri = `${baseUrl}/${calendarId}/events?${stringify(config)}`;

    let response;
    try {
      response = await fetch(requestUri);
    } catch (r) {
      this.setState({ isError: true });
    }

    if (!response.ok) {
      this.setState({ isError: true });
    } else {
      const result = await response.json();

      this.setState(result);
    }
  };

  render() {
    return (
      <Calendar
        {...this.state}
        {...this.props}
        handleSetFilter={this.handleSetFilter}
      />
    );
  }
}
