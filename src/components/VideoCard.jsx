import React, { useState } from "react";

import { Card, Modal } from "react-bootstrap";
const VideoCard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card>
        <Card.Img
          onClick={handleShow}
          variant="top"
          height={"150px"}
          src="https://nigelclarkepresenter.co.uk/reviews/wp-content/uploads/2016/11/Moana-2--1280x640.jpg"
        />
        <Card.Body>
          <Card.Text className="d-flex align-items-center justify-content-between">
            Moana 2
          </Card.Text>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <button classanme="btn">
            {" "}
            <i className="fa-solid fa-trash text-danger"></i>{" "}
          </button>
        </Card.Body>
      </Card>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="360"
            src="https://www.youtube.com/embed/pSHVbLPWA28?autoplay=1"
            title="How Big is The Universe?"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>

    </>
  );
};
export default VideoCard;
