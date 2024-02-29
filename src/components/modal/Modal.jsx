import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './Modal.css'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:'400px'
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)


function View({ name, address, pincode, phoneNumber, setName, setAddress, setPincode, setPhoneNumber, buyNow }) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div >
      <button onClick={openModal} className='modal-btn'>Buy Now</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
       <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Fill the details</h2>
       <input type="name"name='name' id='name' placeholder='Enter Your Name' style={{padding:'10px',width:'80%',margin:'30px'}} value={name} onChange={(e)=>setName(e.target.value)}/>
       <input type="text" name='address' id='address' style={{padding:'10px',width:'80%',margin:'30px'}} placeholder='Enter Your Address' valuealue={address} onChange={(e)=>setAddress(e.target.value)}/>
       <input type="text" name='pincode' id='pincode'style={{padding:'10px',width:'80%',margin:'30px'}} placeholder='Enter Your Pincode' value={pincode} onChange={(e)=>setPincode(e.target.value)}/>
       <input type="text" name='mobile' id='mobile'style={{padding:'10px',width:'80%',margin:'30px'}} placeholder='Enter Your Phone NUmber'value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} />
       <button onClick={()=>{buyNow(); closeModal()}} type='button' style={{width:'200px',height:'4vh',backgroundColor:'dodgerblue',color:'white',border:'none',cursor:'pointer'}}>Order Now</button>
       </div>
      </Modal>
    </div>
  );
}
export default View