import { useEffect, useState } from "react";
import axios from "axios";

// Custom hook for fetching todos with auto-refresh
function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up interval to fetch data every n seconds
    const intervalId = setInterval(() => {
      axios
        .get("<https://sum-server.100xdevs.com/todos>")
        .then((res) => {
          setTodos(res.data.todos);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching todos:", error);
          setLoading(false);
        });
    }, n * 1000);

    // Initial data fetch
    axios
      .get("<https://sum-server.100xdevs.com/todos>")
      .then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
        setLoading(false);
      });

    // Clean up the interval on component unmount or when n changes
    return () => clearInterval(intervalId);
  }, [n]);

  // Return todos and loading state
  return { todos, loading };
}

function useIsOnline() {
  // Initialize state with the current online status
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    // Add event listeners to track online/offline changes
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Attach event listeners to the 'online' and 'offline' events
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup: Remove event listeners on component unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Return the current online status
  return isOnline;
}

const useMousePointer = () => {
  // Initialize state with the initial mouse position (0, 0)
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Event handler to update the mouse position on mouse movement
  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    // Add event listener for 'mousemove' event when the component mounts
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup: Remove event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Return the current mouse position
  return position;
};

const useInterval = (callback, delay) => {
  useEffect(() => {
    // Set up an interval and store the interval ID
    const intervalId = setInterval(callback, delay);

    // Cleanup: Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [callback, delay]);
};

const useDebounce = (value, delay) => {
  // State to store the debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set up a timer to update the debounced value after the specified delay
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clean up the timer if the value changes before the delay has passed
    return () => clearTimeout(timerId);
  }, [value, delay]);

  return debouncedValue;
};

// Main App component
function App() {
  // Using the custom hook to fetch todos with auto-refresh every 10 seconds
  // const { todos, loading } = useTodos(10);
  const isOnline = useIsOnline();
  const mousePointer = useMousePointer();

  // Rendering loading message if data is still loading
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // Rendering Track component for each todo
  return (
    <>
      {/* {todos.map((todo) => (
        <Track key={todo.id} todo={todo} />
      ))} */}
      {isOnline ? "You are online, yay!" : "You are not online"}
      Your mouse position is {mousePointer.x} {mousePointer.y}
      <SearchBar />
    </>
  );
}

// Track component for rendering individual todo
function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}

const SearchBar = () => {
  // State to manage the user input
  const [inputValue, setInputValue] = useState("");

  // Use the useDebounce hook to get the debounced value
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  // Integrate the debouncedValue in your component logic (e.g., trigger a search API call via a useEffect)
  useEffect(() => {
    console.log(debouncedValue);
  }, [debouncedValue]);

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
  );
};

export default App;
