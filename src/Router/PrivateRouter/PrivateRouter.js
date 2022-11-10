import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Authentications/AuthContext';

const PrivateRouter = ({ children }) => {
    const location = useLocation()

    
    const { user, loader } = useContext(AuthContext)

    if (loader) {
        return <>
            <div>
                <progress className="progress w-56"></progress>
            </div>

        </>
    }

    if (user && user.uid) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRouter;