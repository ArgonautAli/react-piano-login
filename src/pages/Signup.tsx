import React, { useState } from "react";
import { TextField } from "../components/TextField/TextField";
import { InputField } from "../components/inputField/InputField";
import { ButtonComp } from "../components/button/ButtonComp";
import { BasicPiano } from "../components/basicPiano/BasicPiano";
import "react-piano/dist/styles.css";
import "./sign.css";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [userName, setUserName] = useState<string>();
  const [openPiano, setOpenPiano] = useState<boolean>(false);
  const [password, setPassword] = useState<number[]>([]);
  const [userNameClicked, setUserNameClicked] = useState<boolean>(false);
  const navigate = useNavigate();

  function getPassword(e: any) {
    setPassword([...password, e]);
  }


  return (
    <>
      <h1>Let's get started</h1>
      <div className="container">
        <div className="info-box">
          <TextField text="Enter name" />
          <InputField
            handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUserName(e.target.value);
              setUserNameClicked(true);
            }}
          />
        </div>
        <div className="info-box">
          <TextField text="Enter password" />
          <InputField
            handleChange={() => {
              setOpenPiano(true);
              setUserNameClicked(false);
            }}
            type="password"
          />
          {openPiano ? (
            <BasicPiano
              handleChange={(e: any) => getPassword(e)}
              isOff={userNameClicked}
            />
          ) : null}
        </div>
        <ButtonComp text="Sign Up" handleClick={()=>{ console.log("submit", userName, password)}} />
        <div>Already a member? <span className="highlight-text" onClick={()=>navigate("/login")}>Login</span> </div>
      </div>
    </>
  );
};
