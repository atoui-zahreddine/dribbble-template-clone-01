import "./App.css";
import Header from "./components/Header/Header";
import LeftSection from "./components/LeftSection/LeftSection";
import MainSection from "./components/MainSection/MainSection";

function App() {
  return (
    <div className="App">
      <Header />
      <LeftSection />
      <MainSection/>
    </div>
  );
}

export default App;
