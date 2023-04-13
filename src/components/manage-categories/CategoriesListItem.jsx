import "../../styles/manage-categories-style/CategoriesListItem.css";
import trashIcon from '../../assets/trash-icon.png';
import editIcon from '../../assets/edit-icon.png';


const CategoriesListItem = () => {
    return (
        <div className="category-list-item">
            <div className="category-item-name">Category Item</div>
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
}

export default CategoriesListItem;