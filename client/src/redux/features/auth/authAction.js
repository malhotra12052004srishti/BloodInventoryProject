import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";

export const userLogin = createAsyncThunk(
    "auth/login",
    async ({ role, email, password }, { rejectWithValue }) => {
        try {
            console.log("Details at Login :- ", role, email, password); // for debugging
            const { data } = await API.post("/auth/login", {
                role,
                email,
                password,
            });

            // storing token
            if (data.success) {
                localStorage.setItem("token", data.token);
                alert(data.message);
                window.location.replace("/");
            }
            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

// user register
export const userRegister = createAsyncThunk(
    "auth/register",
    async (
        {
            name,
            role,
            email,
            password,
            phone,
            organisationName,
            address,
            hospitalName,
            website,
        },
        { rejectWithValue }
    ) => {
        try {
            const { data } = await API.post("/auth/register", {
                name,
                role,
                email,
                password,
                phone,
                organisationName,
                address,
                hospitalName,
            });
            if (data?.success) {
                console.log("User Registered Successfully", data.token);
                alert("User Registered Successfully");
                localStorage.setItem("token", data.token);   
                return data;
            }
        } catch (error) {
            console.log(error);
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

// current user
export const getCurrentUser = createAsyncThunk(
    "auth/getCurrentUser",
    async ({ rejectWithValue }) => {
        try {
            const res = await API.get("/auth/current-user");
            if (res.data) {
                return res?.data;
            }
        } catch (error) {
            console.log(error);
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);
