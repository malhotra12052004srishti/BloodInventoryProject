import React from "react";
import Form from "../../components/shared/form/Form";

const Login = () => {
  return (
    <>
      <div className="row g-0">
        <div className="col-md-8 form-banner">
          <img src="./assets/banner1.jpg" alt="loginImage" />
        </div>
        <div className="col-md-4 form-container">
          <Form
            formType={"login"}
            formTitle={"Login Page"}
            submitBtn={"Login"}
          />
        </div>
      </div>
    </>
  );
};

export default Login;
