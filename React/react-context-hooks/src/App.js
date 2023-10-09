import ContextTutorial from "./components/ContextTutorial";
import LearnReducer from "./components/useReducer/LearnReducer";
import LearnEffect from "./components/useEffect/LearnEffect";
import LearnRef from "./components/useRef/LearnRef";
import LearnLayoutEffect from "./components/useLayoutEffect/LearnLayoutEffect";

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <LearnLayoutEffect />
    </div>
  );
}

export default App;
