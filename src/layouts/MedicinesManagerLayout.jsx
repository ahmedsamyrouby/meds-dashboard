import { Outlet, NavLink } from "react-router-dom";

// styles
import "../styles/manage-medicines-style/MedicinesManagerLayout.css";


const MedicinesManagerLayout = () => {
  return (
    <main className="medicines-manager-layout">
      <header className="medicines-manager-header">
        
        <h1>Medicines</h1>

        <nav className="medicines-manager-nav">
          <NavLink to="view">view all medicines</NavLink>
          <NavLink to="add">add medicine</NavLink>
        </nav>
      </header>

      <section className="medicines-manager-view">
        <Outlet />
      </section>
    </main>
  );
};

export default MedicinesManagerLayout;
