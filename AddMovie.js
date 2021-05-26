import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const AddMovie = ({ addMovie }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  const handleChange = (event) => {
    setMovie({ ...newMovie, [event.target.name]: event.target.value });
  };
  const [newMovie, setMovie] = useState({
    id: uuidv4(),
    title: "",
    description: "",
    posterURL: "",
    rate: 1,
  });
  const handleSave = () => {
    addMovie(newMovie);
    setMovie({
      id: uuidv4(),
      title: "",
      description: "",
      posterURL: "",
      rate: 1,
    });
  };
  const addClose = () => {
    handleShow();
    handleSave();
  };
  return (
    <div>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{ marginBottom: 20 }}
      >
        +
      </Button>
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              ,
              <label className="input" style={{ marginRight: 10 }}>
                Title :{" "}
              </label>
              <input
                type="text"
                name="title"
                onChange={handleChange}
                value={newMovie.title}
              />
            </div>
            <div>
              <label className="input" style={{ marginRight: 10 }}>
                Descript. :
              </label>
              <input
                type="text"
                name="description"
                onChange={handleChange}
                value={newMovie.description}
              />
            </div>
            <div>
              <label className="input" style={{ marginRight: 10 }}>
                PosterURL :
              </label>
              <input
                type="text"
                name="posterURL"
                onChange={handleChange}
                value={newMovie.posterURL}
              />
            </div>
            <div>
              <label className="input" style={{ marginRight: 10 }}>
                Rate :{" "}
              </label>
              <input
                type="number"
                name="rate"
                onChange={(e) =>
                  e.target.value > 0 && e.target.value < 5
                    ? setMovie({ ...newMovie, rate: parseInt(e.target.value) })
                    : null
                }
                value={newMovie.rate}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}>
            Close
          </Button>
          <Button variant="primary" onClick={addClose} disabled={false}>
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
