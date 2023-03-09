import React, { useState } from 'react';
import './style.css';
import data from './data.json';
import Popup from 'reactjs-popup';
import Login from './Login';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from 'react-router-dom';

function App() {
  const [name, setName] = useState('');
  const [pswd, setPswd] = useState('');
  const [errmsg, setErrmsg] = useState('');
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const [userregistered, setUserregistered] = useState(true);

  function validate(e) {
    let value = e.target.name;
    if (value === 'uName') {
      setName(e.target.value);
    } else if (value === 'psd') {
      setPswd(e.target.value);
    }
  }
  function submit(event) {
    event.preventDefault();
    if (name == '' || pswd == '') {
      setErrmsg('Enetr login details !!!');
      setOpen((o) => !o);
    } else {
      var keys = Object.keys(data);
      var uName = keys.filter((key) => {
        return key == name;
      });
      console.log(uName);
      if (uName[0] != undefined && data[uName[0]].password == pswd) {
        console.log('Login success');
      } else {
        if (!uName[0]) {
          setErrmsg('No register user, Please register!!!');
          setOpen((o) => !o);
        } else {
          setErrmsg('Wrong Password !!!');
          setOpen((o) => !o);
        }
      }
    }
  }

  function register(event) {
    event.preventDefault();
    setUserregistered(false);
  }
  function back(e) {
    e.preventDefault();
    setUserregistered(true);
  }

  //  REGISTRATION CODE

  const [regname, setRegname] = useState('');
  const [regpsd, setRegpsd] = useState('');
  const [regcnfpsd, setRegcnfpsd] = useState('');
  function regValidation(e) {
    e.preventDefault();
    var value = e.target.name;
    if (value == 'regpsd') {
      setRegpsd(e.target.value);
    } else if (value == 'regcnfpsd') {
      setRegcnfpsd(e.target.value);
    } else if (value == 'reguName') {
      setRegname(e.target.value);
    }
    //console.log(regname, regpsd, regcnfpsd);
  }
  function registration(e) {
    e.preventDefault();
    var keys = Object.keys(data);
    var noUser = keys.filter((key) => {
      return key == regname;
    });

    if (
      regname != '' &&
      regpsd != '' &&
      regcnfpsd != '' &&
      noUser[0] == undefined &&
      regpsd == regcnfpsd
    ) {
      setErrmsg('User Successfully registered');
      setOpen((o) => !o);
    } else if (regpsd != regcnfpsd && regpsd != '') {
      setErrmsg('Password and confirm password are mismatching !!!');
      setOpen((o) => !o);
    } else if (regname == '') {
      setErrmsg('Please enter User Name');
      setOpen((o) => !o);
    } else if (regpsd == '' || regcnfpsd == '') {
      setErrmsg('Please enter password and confirm password');
      setOpen((o) => !o);
    } else {
      setErrmsg('User ID already exists!!! Please try another');
      setOpen((o) => !o);
    }
  }

  return (
    <Router>
      <div>
        {userregistered ? (
          <div>
            <form className="form" onChange={validate}>
              <p> LOGIN </p>
              <input type="text" name="uName" placeholder="User Name" />
              <input type="password" name="psd" placeholder="Password" />
              <a className="reset">Reset password?</a>
              <div className="margin-top10">
                <button onClick={submit}>Login</button>
                <button id="frmbtm" className="button" onClick={register}>
                  Register
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <form className="form" onChange={regValidation}>
              <p> Registration {regname}</p>
              <input type="text" name="reguName" placeholder="User Name" />
              <input type="password" name="regpsd" placeholder="Password" />
              <input
                type="text"
                name="regcnfpsd"
                placeholder="Confirm Password"
              />

              <div className="margin-top10">
                <button onClick={registration}>Submit</button>
                <button id="frmbtm" className="button" onClick={back}>
                  Back
                </button>
              </div>
            </form>
          </div>
        )}

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
      </div>
    </Router>
  );
}

export default App;
