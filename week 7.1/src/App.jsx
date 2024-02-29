import "./App.css";
import { Suspense, lazy, useContext } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const Dashboard = lazy(() => import("./components/Dashboard"));
const LandingPage = lazy(() => import("./components/LandingPage"));
import { CounterContext } from "./context/utils";

function App() {
  return (
    <BrowserRouter>
      <Appbar />

      <CounterContext.Provider value={12}>
        <Parent />
      </CounterContext.Provider>
      <Routes>
        <Route
          path="/landing"
          element={
            <Suspense fallback={"loading..."}>
              <LandingPage />
            </Suspense>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={"loading..."}>
              <Dashboard />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

const Appbar = () => {
  const onClickHandler = (location) => {
    navigate(location);
  };

  const navigate = useNavigate();

  return (
    <>
      <h1>This is header</h1>
      <div>
        <button
          onClick={() => {
            onClickHandler("/landing");
          }}
        >
          Landing
        </button>
        <button
          style={{ marginLeft: "16px" }}
          onClick={() => {
            onClickHandler("/dashboard");
          }}
        >
          Dashboard
        </button>
      </div>
    </>
  );
};

const Parent = () => {
  return <Child />;
};

const Child = () => {
  return <GrandChild />;
};

const GrandChild = () => {
  const count = useContext(CounterContext);
  return <h2>{count}</h2>;
};

export default App;
