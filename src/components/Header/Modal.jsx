// Modal.js
import React from 'react';

const Modal = ({ isOpen, closeModal }) => {
  return (
    <div className={`fixed top-0 left-0 right-0 bottom-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-white w-full max-w-md mx-auto p-4 rounded-lg shadow-lg mt-20">
        {/* Your modal content goes here */}
        <h2 className="text-2xl font-semibold mb-4">Modal Content</h2>
        <p>This is your modal content.</p>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
