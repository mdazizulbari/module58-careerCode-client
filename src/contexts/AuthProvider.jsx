import React, { useState } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState()
const createUser=(email,password)=>{
    return createUserWithEmailAndPassword( email,password)
}

    const authInfo={

    }

    return (
        <AuthContext>{children}</AuthContext>
    );
};

export default AuthProvider;