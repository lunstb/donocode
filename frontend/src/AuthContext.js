import React, { useContext, useState, useEffect } from 'react'
import firebase from './firebase'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider( { children } ) {
    const [currentUser, setCurrentUser] = useState();
    const [isLoading, setIsLoading] = useState(true);

    function signin(email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    function signup(email, password) {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    function signout () {
        return firebase.auth().signOut();
    }

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            setCurrentUser(user);
            setIsLoading(false);
        });
        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        signin, 
        signup, 
        signout,
    }

    return (
        <AuthContext.Provider value={value}>
            {!isLoading && children}
        </AuthContext.Provider>
    )
}