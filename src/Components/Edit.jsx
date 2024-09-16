import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement
Modal.setAppElement("#root");

function Edit({ oldTask, handleEdit }) {
  const [name, setName] = useState(oldTask.name);
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const editedTask = { id: oldTask.id, name, isDone: oldTask.isDone };
    handleEdit(editedTask);
    closeModal();
    setName("");
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="edit-container">
      <button className="btn open-modal-btn" onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Edit Task Modal"
      >
        <button className="btn close-modal-btn" onClick={closeModal}>Close</button>
        <form className="edit-form" onSubmit={handleSubmit}>
          <label className="form-label">Title:</label>
          <input
            className="form-input"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button className="btn submit-btn" type="submit">Submit</button>
        </form>
      </Modal>
    </div>
  );
}

export default Edit;
