import React, { useEffect, useState } from 'react'
import { Modal, Button } from "react-bootstrap";
import error from './error-circle-solid.svg'

const ModalError = (props) => {

    const [show, setShow] = useState(props.show)


    useEffect(() => {
      if (props.show) {
        setShow(true)
      } else {
        setShow(false)
      }    
    })

    return (
        <Modal
        show={show}
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        onHide={props.onHide}
        className="text-center h-50"
      >
        <Modal.Body id="contained-modal-title-vcenter" closebutton>
        
        <img src={error} width="60px" className="mb-4" />
          <h4 className="h4 mb-4">
            {props.messageErr}
          </h4>
        </Modal.Body>
      </Modal>
    )
}

export default ModalError;
