import React from 'react';

function Popuphtml(props) {
  return (
    <div>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <a className="close" onClick={closeModal}>
            &times;
          </a>
          <div className="header"> WARNING </div>
          <div className="content"> {errmsg} </div>
          <button className="button" onClick={register}>
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
