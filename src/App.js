import './App.css';
import Row from "./Row";
import requests from "./request"

function App() {
  return (
    <div className="app">
      <h1>this is netflix clone i build using react and firebase</h1>
      <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} />
      <Row title="Trending" fetchURL={requests.fetchTrending} />
    </div>
  );
}

export default App;
