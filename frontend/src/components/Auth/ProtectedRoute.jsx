import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({isProtected, children, redirectPath = "/"}) => {
    if(!isProtected){
        return <Navigate to={redirectPath} replace/>
    }
    return children ? children : <Outlet/>;
}

export default ProtectedRoutes