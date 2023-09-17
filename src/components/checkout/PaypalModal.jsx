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

const Paypal = ({ isModal, setIsModal, buttons }) =>{
    return(
        <Modal
            isOpen={isModal}
            onRequestClose={()=>setIsModal(!isModal)}
            style={customStyles}
            ariaHideApp={false}
        >
            <button onClick={()=>setIsModal(!isModal)}>close</button>
            <div className="p-3">
                {buttons}
            </div>
        </Modal>
    )
}
export default Paypal;