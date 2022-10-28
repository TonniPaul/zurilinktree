import "./App.css";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import TopImage from "./components/topImage/TopImage";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <TopImage />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
