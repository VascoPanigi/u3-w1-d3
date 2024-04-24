import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyHero from "./components/MyHero";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="App">
      <header className="bg-dark">
        <MyNavbar />
      </header>
      <main className="bg-dark">
        <MyHero />
        <AllTheBooks />
      </main>
      <footer className="bg-dark">
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
