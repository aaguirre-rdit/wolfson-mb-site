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
        34

        In light of the ongoing COVID-19 pandemic, the May Ball Presidents’ Committee would like to reassure students that May Balls are closely monitoring the situation and will follow the advice given by the central Government, Cambridge City Council, University of Cambridge, and College officials with regard to large social functions. As it stands, all Committees are proceeding with preparations for their events and are proud of the programmes they have so far put together. We will however react to the situation appropriately as it unfolds.
        All May Balls will release a comprehensive refund policy within the coming weeks. While Ball Committees prepare to release their respective refund policies, please refrain from emailing your ticketing officers unless urgent.
        Please note that the recent cancellation of Newnham June Event is not related to the outbreak and the Event will be releasing its own statements about guest refund rights.
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
