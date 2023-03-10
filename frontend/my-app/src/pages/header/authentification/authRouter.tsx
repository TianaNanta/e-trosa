import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./login";
import Signup from "./signup";

const AuthRouter = () => {
    return (
        <Routes>
            <Route index element = {<Login />} />
            <Route path="/login" element = {<Signup />}/>
            <Route path="/signup" element = {<Login />}/>
        </Routes>
    );
}

export default AuthRouter;