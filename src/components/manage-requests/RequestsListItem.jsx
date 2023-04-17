import '../../styles/manage-requests-style/RequestsListItem.css'

const RequestsListItem = () => {
  return (
    <div className="requests-list-item">
      <div className="requests-item-name">Requests Item</div>
      <div className="btns-container">
        <button className="accept-btn">
          Accept
        </button>
        <button className="decline-btn">
          Decline
        </button>
      </div>
    </div>
  );
};

export default RequestsListItem;
