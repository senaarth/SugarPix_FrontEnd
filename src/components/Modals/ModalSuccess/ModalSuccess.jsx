import React, { useEffect, useState } from 'react'
import { Modal, Button } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import success from './check-circle-solid.svg'

const ModalSuccess = (props) => {

    const [show, setShow] = useState(props.show)
    const history = useHistory();



    useEffect(() => {
      if (props.show) {
        setShow(true)
      } else {
        setShow(false)
      }
    })

    const HideModal = () => {
      props.onHide()
      history.push('/')
    }

    return (
      <div className="row h-100">
              <Modal
      show={show}
      dialogClassName="modal-90w"
      aria-labelledby="contained-modal-title-vcenter"
      onHide={HideModal}
      centered
      className="text-center rounded-lg col-sm-12 my-auto"
    >
      <Modal.Body id="contained-modal-title-vcenter" closebutton centered>
      <img src={success} width="60px" className="mb-4" />
        <h5 className="h5 mb-4">
          {props.messageSuccess}
        </h5>

        <Link to="/">
          <Button variant="success" onClick={props.onHide}>Ok</Button>
        </Link>
      </Modal.Body>
    </Modal>
      </div>
    )
}

export default ModalSuccess;