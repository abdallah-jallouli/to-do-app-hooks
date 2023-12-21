import React, { useState } from 'react'
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

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function Edit({oldTask,handleEdit}) {
  const [name, setName] = useState(oldTask.name)

  const [modalIsOpen, setIsOpen] = React.useState(false);

//   const handleRating = (rating) => setRating (rating);
  
const handleSubmit = (e)=>{
    e.preventDefault();
    const editedTask = {id : oldTask.id ,  name , isDone: oldTask.isDone};
    handleEdit(editedTask);
    closeModal();
    setName("");
  }

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className='btn' onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add new movie</h2> */}
        <button className='btn' onClick={closeModal}>close</button>
        <form onSubmit={handleSubmit}>
          <label > Title : </label>
          <input type='text' value={name} onChange={e =>setName(e.target.value)}/>
          <button className='btn' type='submit' >Submit</button>
        </form>
      </Modal>
    </div>
  );
}

// ReactDOM.render(<App />, appElement);
export default Edit