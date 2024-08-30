import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const Add = () => {
  const [videoDetails, setVideoDetails] = useState({
    caption: "", //  object
    url: "",
    link: "",
  });
  console.log(videoDetails);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const extractEmbedURL = (link) => {
    if (link.includes("v=")) {
      let videoId = link.split("v=")[1].slice(0, 10);
      setVideoDetails({
        ...videoDetails,
        link: `https://www.youtube.com/embed/${videoId}`,
      });
    } else {
      //invalid URL
      setVideoDetails({ ...videoDetails, link: " " });
    }
  };

  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload New Video</h5>
        <button
          onClick={handleShow}
          className="btn btn-warning ms-5 rounded-circle fw-bolder fs-5"
        >
          +
        </button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Uploading Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border rounded p-3">
            <FloatingLabel
              controlId="floatingInputCaption"
              label="Video Caption"
              className="mb-3"
            >
              <Form.Control
                onChange={(e) =>
                  setVideoDetails({ ...videoDetails, caption: e.target.value })
                }
                type="text"
                placeholder="Video Caption"
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInputImage"
              label="Image URL"
              className="mb-3"
            >
              <Form.Control
                onChange={(e) =>
                  setVideoDetails({ ...videoDetails, url: e.target.value })
                }
                type="text"
                placeholder="Image URL"
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInputLink"
              label="Youtube Video Link"
              className="mb-3"
            >
              <Form.Control
                onChange={(e) => extractEmbedURL(e.target.value)}
                type="text"
                placeholder="Youtube Video Link"
              />
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Add;
