import React, { Component } from "react";

export default class Video extends Component {
  state = {
    html: "",
  };

  componentDidMount() {
    const src = this.props.src;
    const html = `
        <video playsinline autoPlay muted loop>
            <source src=${src} />
        </video>
      `;
    this.setState({ html });
  }

  render() {
    return <div dangerouslySetInnerHTML={{ __html: this.state.html }}></div>;
  }
}
