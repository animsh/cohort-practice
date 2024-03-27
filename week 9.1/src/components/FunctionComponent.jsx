import React, { useState, useEffect } from "react";

function FunctionComponent() {
  // Using the useState hook to manage state in a functional component
  const [count, setCount] = useState(0);

  // useEffect: Invoked after the component is mounted and reinvoked if dependencies change
  useEffect(() => {
    // Perform setup or data fetching here

    // Cleanup function (similar to componentWillUnmount)
    return () => {
      console.log("Component is about to be unmounted (cleanup)");
      // Cleanup code goes here
    };
  }, []); // Empty dependency array ensures useEffect runs only on mount and unmount

  // Function to increment the count when the button is clicked
  const incrementCount = () => {
    // Updating the count state using the setCount function
    setCount(count + 1);
  };

  // Rendering the component with the current count and an "Increment" button
  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default FunctionComponent;
