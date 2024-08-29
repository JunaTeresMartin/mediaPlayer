import React, { useState } from "react";
import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";

const Category = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="d-flex justify-content-around">
        <h5>All Categories</h5>
        <button
          onClick={handleShow}
          style={{ width: "50px", height: "50px" }}
          className="btn btn-info rounded-circle fw-bolder-5"
        >
          +
        </button>
      </div>
      <div className="container-fluid mt-3">
        <div className="border rounded p-3 mb-2">
          <div className="d-flex justify-content-between">
            <h5>categoryName</h5>
            <button className="btn">
              <i className="fa-solid fa-trash text-danger"></i>
            </button>
          </div>
          <div className="row mt-2">
            <div className="col-lg-6">{/* videos */}</div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Category Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInputImage"
            label="Category Name"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Category Name" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="btn btn-info">Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Category;
