import "./App.css";
import Petition from "./components/petition";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <nav className="navbar navbar-light bg-light p-2">
        <h3>Docs-Law Demo</h3>
      </nav>
      <Petition />
    </>
  );
}

export default App;
