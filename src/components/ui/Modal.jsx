export default function Modal({ show, title, children, onClose }) {
  if (!show) return null;

  return (
    <div className="modal d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body">{children}</div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
