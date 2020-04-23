import React, {useState} from "react";
import Button from 'react-bootstrap/Button'
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
const Statement = () => {
  const [show, setShow] = useState(true)
  const handleClose = () => setShow(false)
  // @ts-ignore
  return (
    <Modal show={show} onHide={handleClose} >
      <Modal.Body >
        Wolfson May Ball has been cancelled
        </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>

  )

}

export default Statement;
