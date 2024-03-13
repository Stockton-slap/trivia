import React from "react";
import Modal from "react-modal";

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "50px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
};

const Popup = ({ setIsModalOpen, isModalOpen }) => {
  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Popup"
        closeTimeoutMS={2000}
      >
        <h2 className="text-xl font-bold text-orange">Congratulations!</h2>
        <p className="text-lg mt-[20px] text-green">
          You guessed all the match-ups. Well done!
        </p>
      </Modal>
    </div>
  );
};

export default Popup;
