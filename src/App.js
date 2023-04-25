import "./styles/App.css";
import Header from "./shared/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="bg-secondary">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
