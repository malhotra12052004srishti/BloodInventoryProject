import React from "react";
import Form from "../../components/shared/form/Form";
import "./Register.css"; // Import your CSS file for additional styling
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../../components/shared/Spinner";
import { userRegister } from "../../redux/features/auth/authAction";
// import userModel from "../../../../models/userModel";

const Register = () => {
    const { loading, error } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const submitHandler = async (formData) => {
        console.log(formData);

        const {
            name,
            email,
            password,
            address,
            phone,
            role,
            organisationName,
            hospitalName,
        } = formData;

        formData.website = "#";

        // Frontend validation
        if (!name || !email || !password || !address || !phone) {
            console.log("All fields are required.");
            console.log(
                name,
                email,
                password,
                address,
                phone,
                role,
                organisationName,
                hospitalName
            );
            alert("All fields are required.");
            return;
        }

        // Dispatching the user registration action
        dispatch(
            userRegister({
                name,
                email,
                password,
                address,
                phone,
                role,
                organisationName,
                hospitalName,
                website: "#",
            })
        );
    };

    return (
        <>
            {error && <span>{alert(error)}</span>}
            {loading ? (
                <Spinner />
            ) : (
                <div className="row g-0">
                    <div className="col-md-8 form-banner">
                        <img
                            src="./assets/banner2.jpg"
                            alt="registerImage"
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-md-4 form-container d-flex flex-column align-items-center justify-content-center">
                        <Form
                            formType={"register"}
                            formTitle={"Register"}
                            submitBtn={submitHandler} // Use submitHandler as submit button action
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Register;
