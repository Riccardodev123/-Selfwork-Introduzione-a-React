import Header from "./components/Header";
import List from "./components/List";
import Navbar from "./components/Navbar";

const names = ['Qui', 'Quo', 'Qua'];

function App() {
  return (
    <>
      {/* Inizio Selfwork Introduzione a React */}

      {/* <h1 className="title">First React Project</h1>
      <label htmlFor="input" className="label">Test</label>
      <input type="text" id="input" className="input"/> */}

      {/* Fine Selfwork Introduzione a React */}

      {/* Inizio Selfwork Componenti React */}
      <Navbar />
      <Header />
      <List names={names} />
    </>
  );
}

export default App;
