import React, { useEffect } from "react";

import Modal from "react-modal";
import "./ModalView.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ModalView = ({ children, open, setOpen }) => {
  useEffect(() => {
    Modal.setAppElement(document.body);
  }, []);

  return (
    <div className="Modal">
      {/* <Modal
        isOpen={open}
        style={customStyles}
        onRequestClose={() => setOpen(false)}
      > */}
      {children}
      {/* </Modal> */}
    </div>
  );
};

export default ModalView;
