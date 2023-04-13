import "../../styles/manage-medicines-style/MedicinesListItem.css";
import trashIcon from '../../assets/trash-icon.png';
import editIcon from '../../assets/edit-icon.png';

/**
 * Name
 * Description
 * Price
 * Expiration Date
 * Categories
 */

const MedicinesListItem = () => {
  return (
    <div className="medicines-list-item">
      <div className="medicines-item-name">Medicine Item</div>
      <div className="btns-container">
        <button className="delete-btn">
          <img src={trashIcon} alt="" />
        </button>
        <button className="edit-btn">
          <img src={editIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default MedicinesListItem;
