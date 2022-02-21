import React from "react";
import Button from "../../components/Button";

const LoginPage = () => {
  return (
    <div>
      <Button title={'Login'} onClick={() => {console.log('clicked')}}/>
    </div>
  );
};

export default LoginPage;
