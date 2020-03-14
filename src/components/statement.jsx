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
        In light of the ongoing COVID-19 pandemic, the May Ball Presidents’ Committee would like to reassure students that May Balls are closely monitoring the situation and will follow the advice given by the central Government, Cambridge City Council, University of Cambridge, and College officials with regard to large social functions.
        All May Balls will release a comprehensive refund policy within the next two weeks. All Balls will aim to refund the full ticket price as much as possible. Due to the overwhelming number of enquiries regarding refunds at this time, please refrain from emailing your ticketing officer unless urgent, whilst Ball Committees prepare to release these.
        Please note that the recent cancellations of Robinson and Newnham May Balls are not related to the outbreak and these Balls will be releasing their own statements about guest refund rights
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
