import React from 'react';
import ReactDOM from 'react-dom';
import '../css/Modal.css'; // Asegúrate de tener un CSS básico para el modal

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>X</button>
                {children}
            </div>
        </div>,
        document.body
    );
};

export default Modal;
