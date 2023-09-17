import React, { useState } from 'react';
import Modal from 'react-modal';

const Drop = ({ isOpen, setIsOpen, content }) =>{
    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={()=>setIsOpen(!isOpen)}
            ariaHideApp={false}
            className="h-screen bg-white z-20 border-none p-0 inset-0"
        >            
            { content }
        </Modal>
    )
}
export default Drop;