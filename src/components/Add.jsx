import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { uploadVideoAPI } from "../services/allAPI";

const Add = () => {
  const [videoDetails, setVideoDetails] = useState({
    caption: "", //  object
    url: "",
    link: "",
  });
  const [invalidLink, setInvalidLink] = useState(false);
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
      setInvalidLink(false);
    } else {
      //invalid URL
      setInvalidLink(true);
      setVideoDetails({ ...videoDetails, link: " " });
    }
  };

  const handleUpload = async () => {
    //destructuring
    const { caption, url, link } = videoDetails;
    if (caption && url && link) {
      //toast.success("Proceed to api")
      const result = await uploadVideoAPI(videoDetails);
      console.log(result);
    } else {
      toast.warning("Please fill the form completely");
    }

    console.log("Inside Upload handle fn");
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
            {invalidLink && (
              <div className="text-danger fw-bolder">Invalid Link</div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" theme="colored" autoClose="3000" />
    </>
  );
};
export default Add;
