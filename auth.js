import React, { useState, useEffect, useContext, createContext } 
from 'react';
import nookies from 'nookies';
import firebase from './firebaseClient';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState(null);

    useEffect(() => {
        return firebase
            .auth()
            .onIdTokenChanged(async user => {
                if(!user) {
                    setUser(null);
                    setEmail(null);
                    nookies.set(undefined, "token", "", {});
                    return;
                }
                const token = await user.getIdToken();
                setUser(user);
                setEmail(user.email);
                nookies.set(undefined, "token", token, {});
            })
    }, [])

    // force refresh the token every 10 minutes
    useEffect(() => {
        const handle = setInterval(async () => {
        const user = firebase.auth().currentUser;
        if (user) await user.getIdToken(true);
        }, 10 * 60 * 1000);

        // clean up setInterval
        return () => clearInterval(handle);
    }, []);

    return(
        <AuthContext.Provider value={{user, email}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);