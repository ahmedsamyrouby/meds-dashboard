import "../../styles/manage-requests-style/RequestsManager.css";
import RequestsList from './RequestsList';

const RequestsManager = () => {
  return (
    <div className="request-manager-container">
      <header className="request-manager-header">
        <h1>Manage Requests</h1>
      </header>
      <RequestsList/>
    </div>
  );
};

export default RequestsManager;
