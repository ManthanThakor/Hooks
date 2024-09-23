import "./App.css";
import UseStateHooks from "./components/UseStateHooks";
import UseEffectHook from "./components/UseEffectHook";
import UseRefHook from "./components/UseRefHook";
import UseMemoHook from "./components/UseMemoHook";
import UseCallbackHook from "./components/UseCallbackHook";
import UseContextHook from "./components/usecontext/UseContextHook";

function App() {
  return (
    <>
      {/* <UseStateHooks /> */}
      {/* <UseEffectHook /> */}
      {/* <UseRefHook /> */}
      {/* <UseMemoHook /> */}
      {/* <UseCallbackHook /> */}
      <UseContextHook />
    </>
  );
}

export default App;
