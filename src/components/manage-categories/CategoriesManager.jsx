import CategoriesForm from "./CategoriesForm";
import CategoriesList from "./CategoriesList";
import "../../styles/manage-categories-style/CategoriesManager.css";

const CategoriesManager = () => {
  return (
    <section className="categories-section">
      <header className="section-header">
        <h1 className="header-title">Add Category</h1>
      </header>
      <section className="main-content-section">
        <CategoriesForm />
        <hr />
        <CategoriesList />
      </section>
    </section>
  );
};

export default CategoriesManager;
