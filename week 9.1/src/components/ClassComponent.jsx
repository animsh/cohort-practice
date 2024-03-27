import React from "react";

class ClassComponent extends React.Component {
  // Constructor to initialize state
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  // componentDidMount: Invoked after the component is first mounted to the DOM
  componentDidMount() {
    // Perform setup or data fetching here
    console.log("Component is mounted to the DOM");
  }

  // componentWillUnmount: Invoked just before the component is unmounted and destroyed
  componentWillUnmount() {
    // Clean up (e.g., remove event listeners or cancel subscriptions)
    console.log("Component is about to be unmounted");
  }

  // Method to increment the count when the button is clicked
  incrementCount = () => {
    // Updating the count state using this.setState
    this.setState({ count: this.state.count + 1 });
  };

  // Render method to display the current count and the "Increment" button
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default ClassComponent;
