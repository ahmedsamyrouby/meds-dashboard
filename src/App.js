import "./styles/App.css";
import Header from "./shared/Header";
import { Outlet } from "react-router-dom";

export const BASE_URL = "http://localhost:3001";

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
