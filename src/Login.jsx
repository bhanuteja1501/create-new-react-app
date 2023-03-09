import React, { useState } from 'react';
import data from './data.json';
function Login() {
  const [name, setName] = useState('');
  const [pswd, setPswd] = useState('');
  const [errmsg, setErrmsg] = useState('');
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const [userregistered, setUserregistered] = useState(false);

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
          setErrmsg('No register user, Please register.');
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
    setErrmsg('Try after sometime');
    if (event.target.attributes.id) {
      setOpen(true);
    }
  }
  return (
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
  );
}

export default Login;
