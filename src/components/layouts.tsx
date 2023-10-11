import { createSignal } from "solid-js";
// import { ChildOne } from "./components/child-one";
// import { ChildTwo } from "./components/child-two";
// import { ChildThree } from "./components/child-three";

// import "./App.css";

export const App = () => {
  const [counter, setCounter] = createSignal(0);

  const handleCounter = () => {
    setCounter(counter() + 1);
    console.log("Clicked! (Solid)", counter());
  };
  
  return (
    <div class="App">
      <button onClick={handleCounter}>Parent</button>
      <div>
        component
        {/* <ChildOne />
        <ChildTwo />
        <ChildThree counter={counter()} /> */}
      </div>
    </div>
  );
};