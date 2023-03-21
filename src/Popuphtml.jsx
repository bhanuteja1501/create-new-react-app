import React, { useState } from 'react';
import Popup from 'reactjs-popup';

function Popuphtml(props) {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <div>
      <Popup open={props.open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <a className="close" onClick={closeModal}>
            &times;
          </a>
          <div className="header"> WARNING </div>
          <div className="content"> {props.errmsg} </div>
          <button className="button" onClick={props.register}>
            Register
          </button>
          <button className="button" onClick={closeModal}>
            {' '}
            Close
          </button>
        </div>
      </Popup>
    </div>
  );
}

export default Popuphtml;
