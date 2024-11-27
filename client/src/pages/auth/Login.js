import React from "react";
import Form from "../../components/shared/form/Form";
import HomeButton from "../../components/HomeButton"; // Import the HomeButton component
import "./Login.css"; // Import your CSS file for additional styling
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner"; // Import Spinner component
import { userLogin } from "../../redux/features/auth/authAction";

const Login = () => {
    const { loading, error } = useSelector((state) => state.auth); // Ensure fallback to avoid destructuring undefined

    return (
        <>
            {error && <span>{alert(error)}</span>}
            {loading ? (
                <Spinner /> // Show spinner while loading
            ) : (
                <div className="row g-0">
                    <div className="col-md-8 form-banner">
                        <img
                            src="./assets/banner1.jpg"
                            alt="loginImage"
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-md-4 form-container d-flex flex-column align-items-center justify-content-center">
                        <Form
                            formType={"login"}
                            formTitle={"Login Page"}
                            submitBtn={userLogin}
                        />
                        {error && (
                            <div className="alert alert-danger mt-3">
                                {error}
                            </div>
                        )}{" "}
                        {/* Display error message if any */}
                    </div>
                </div>
            )}
        </>
    );
};

export default Login;
