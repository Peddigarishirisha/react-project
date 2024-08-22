import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { getDoc, setDoc, doc } from 'firebase/firestore';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    async function signUp(email, password) {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const userRef = doc(db, 'users', email);
            const userDoc = await getDoc(userRef);

            if (!userDoc.exists()) {
                // Document doesn't exist, create it
                await setDoc(userRef, {
                    savedShows: [],
                });
            } else {
                // Document exists, handle accordingly (optional)
            }

            return userCredential;
        } catch (error) {
            console.error('Error signing up:', error);
            throw error; // Propagate error to handle it elsewhere if needed
        }
    }

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
        return signOut(auth);
    }

    return (
        <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}

export function UserAuth() {
    return useContext(AuthContext); // Example usage, adjust as per your needs
}
