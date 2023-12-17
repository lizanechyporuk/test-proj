import React from "react";

interface SuccessModalProps {
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ onClose }) => {
  return (
    <div className="successModal text-success text-center modal z-2 d-block p-2">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <h1>Successfully sent!</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
