import "./App.css";
import UseStateHooks from "./components/UseStateHooks";
import UseEffectHook from "./components/UseEffectHook";
import UseRefHook from "./components/UseRefHook";
import UseMemoHook from "./components/UseMemoHook";
import UseCallbackHook from "./components/UseCallbackHook";
import ThemeSwitcher from "./components/contextApi/ThemeSwitcher";
import { ThemeProvider } from "./components/contextApi/ThemeContext";
import { CounterProvider } from "./components/contextApi2/CounterContext";

import CounterSec from "./components/contextApi2/CounterSec";

function App() {
  return (
    <>
      {/* <UseStateHooks /> */}
      {/* <UseEffectHook /> */}
      {/* <UseRefHook /> */}
      {/* <UseMemoHook /> */}
      {/* <UseCallbackHook /> */}
      {/* ========================== */}
      {/* ========================== */}
      {/* //!------- contextApi ex 1---------- */}
      {/* <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider> */}
      {/* //!------- contextApi ex 1---------- */}
      {/* ========================== */}
      {/* ========================== */}
      {/* //!------- contextApi ex 2---------- */}
      <CounterProvider>
        <CounterSec />
      </CounterProvider>
      {/* //!------- contextApi ex:2---------- */}
      {/* ========================== */}
      {/* ========================== */}
    </>
  );
}

export default App;
