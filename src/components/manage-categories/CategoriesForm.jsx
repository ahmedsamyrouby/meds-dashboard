import "../../styles/manage-categories-style/CategoriesForm.css";
import axios from "axios";

const CategoriesForm = () => {
  const addCategory = () => {
    const url = "http://localhost:3001/api/insert";
    try {
      axios.post(url, {
        // Name_Category: Name_Category,
        // description_Category: description_Category
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="add-category-form-container">
      <form action="" className="add-category-form">
        <div className="category-name-container">
          <label htmlFor="category-name">Category Name</label>
          <input type="text" name="" id="category-name" required/>
        </div>
        <div className="category-description-container">
          <label htmlFor="category-description">Category Description</label>
          <textarea name="" id="category-description" required></textarea>
        </div>
        <div className="add-category-btn-container">
          <button type="submit" className="add-category-btn">
            Add Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoriesForm;
