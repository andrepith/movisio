import React, {useState} from "react";
import {Modal, Row, Col} from 'react-bootstrap'

const Card = ({
  Title,
  Poster,
  key,
  imdbID,
  history
}) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = async search => {
    setShow(true);
  };
  return (
    <>
    <div className="card p-4 mb-4" style={{ 
      border: 'solid 1px black'
   }} key={key}>
      <div className="card-image">
        <img
          alt={Title}
          src={Poster}
          className="img-fluid"
          style={{ width: "100%" }}
        />
      </div>
      <div className="card-body text-center">
        <div>{Title}</div>
        <button onClick={() => history.push(`/${imdbID}`)}>Go to detail</button>
        <button onClick={handleShow}>See Poster</button>
      </div>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modal__container"
      >
        <>
      <Modal.Header closeButton>
        <Modal.Title>{Title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="modal__wrapper">
          <Col sm={12} className="poster text-center">
            <img src={Poster} alt={Title} style={{ maxHeight: "320px" }} />
          </Col>
        </Row>
      </Modal.Body>
    </>
      </Modal>
    </>
  );
};

export default Card
