import React, { Component } from "react";

import Prism from "prismjs";
import "../assets/stylesheets/prism-tomorrow.min.css";

export default class Content extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Prism.highlightAll();
  }

	render(){
		return (
      <article className="component_content">
        <h2 tabIndex="0" className="h2">{this.props.blockTitle}</h2>

        <div>
          <div className="component_content__demo" dangerouslySetInnerHTML={{__html: this.props.elements}}></div>

          <div className="component_content__code">
            <pre>
              <code className="language-html">
{this.props.codeSnippets}
              </code>
            </pre>
          </div>
        </div>
      </article>
		)
	}
}
