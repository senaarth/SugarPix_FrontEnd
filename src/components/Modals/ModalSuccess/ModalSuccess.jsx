import React, { useEffect, useState } from 'react'
import { Modal } from "react-bootstrap";

const ModalSuccess = (props) => {

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
        aria-labelledby="example-custom-modal-styling-title"
        onHide={props.onHide}
      >
        <Modal.Header closeButton className='header-modal'>
          <Modal.Title id="example-custom-modal-styling-title">
            Titulo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {props.messageSuccess}
          </p>
        </Modal.Body>
      </Modal>
    )
}

export default ModalSuccess;