import "./App.css";
import About from "./components/About";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Interests from "./components/Interests";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-box">
        <Content />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
}

export default App;
