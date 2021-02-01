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
      <div className="row h-100">
      <Modal
        show={show}
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={props.onHide}
        className="text-center rounded-lg col-sm-12 my-auto"
      >
        <Modal.Body id="contained-modal-title-vcenter" closebutton centered>
        <img src={error} width="60px" className="mb-4" />
          <h5 className="h5 mb-4">
            {props.messageErr}
          </h5>

          <Button variant="danger" onClick={props.onHide}>Ok</Button>
        </Modal.Body>
      </Modal>
      </div>
    )
}

export default ModalError;
