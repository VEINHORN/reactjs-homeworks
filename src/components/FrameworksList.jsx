import { Component } from "react";

const frameworks = ["NextJS", "Angular", "Vue", "Svelte"];

export default class FrameworksList extends Component {
  render() {
    return (
      <ul>
        {frameworks.map((framework) => (
          <li key={framework}>{framework}</li>
        ))}
      </ul>
    );
  }
}
