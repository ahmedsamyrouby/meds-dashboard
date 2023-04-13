import '../../styles/manage-medicines-style/MedicinesForm.css'
/**
 * Name
 * Description
 * Price
 * Expiration Date
 * Categories
 */

const MedicinesForm = () => {
  return (
    <section className="medicines-form-container">
      <form action="" className="medicines-form">
        <div className="form-details-container">
          <label htmlFor="medicine-name">Medicine Name</label>
          <input type="text" name="" id="medicine-name" />
        </div>
        <div className="form-details-container">
          <label htmlFor="medicine-desc">Medicine Description</label>
          <textarea type="text" name="" id="medicine-desc" />
        </div>
        <div className="medicine-price-date-category">
        <div className="form-details-container">
          <label htmlFor="medicine-price">Medicine Price</label>
          <input type="number" name="" id="medicine-price" />
        </div>
        <div className="form-details-container">
          <label htmlFor="exp-date">Expiration Date</label>
          <input type="date" name="" id="exp-date" />
        </div>
        <div className="form-details-container">
          <label htmlFor="medicine-category">Medicine Categories</label>
          <select id="medicine-category">
            <option value="option 1">option 1</option>
            <option value="option 2">option 2</option>
            <option value="option 3">option 3</option>
            <option value="option 4">option 4</option>
            <option value="option 5">option 5</option>
            <option value="option 6">option 6</option>
          </select>
        </div>
        </div>
        <div className="submit-btn-container">
          <button className="submit-btn">
            Add Medicine
          </button>
        </div>

      </form>
    </section>
  );
};

export default MedicinesForm;
