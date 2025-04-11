import "./App.css";
import Routes from "./Routes";
import UseProvider from "./useProvider";

function App() {
  return (
    <>
      <UseProvider>
        <Routes />
      </UseProvider>
    </>
  );
}

export default App;
