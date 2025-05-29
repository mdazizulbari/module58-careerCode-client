import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
const createUser=(email,password){
    return createUserWithEmailAndPassword(auth, email,password)
}

    const authInfo={

    }

    return (
        <AuthContext>{children}</AuthContext>
    );
};

export default AuthProvider;