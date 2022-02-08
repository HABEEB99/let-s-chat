import { useEffect, useContext, createContext, useState } from 'react';
import Loader from './components/loader/Loader';
import { auth, db } from './firebase';
import Login from './pages/login';
import { serverTimestamp, setDoc, doc } from '@firebase/firestore';

const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return auth.onIdTokenChanged(async (user) => {
      if (!user) {
        console.log('invalid user');
        setCurrentUser(null);
        setLoading(false);
        return;
      }

      const token = await user.getIdToken();
      const currentUserData = {
        name: user.displayName,
        email: user.email,
        lastSeen: serverTimestamp(),
        image: user.photoURL,
      };
      await setDoc(doc(db, 'users', user.uid), currentUserData);
      console.log('here is the user token:', token);
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loader />;
  } else if (!currentUser) {
    return <Login />;
  } else {
    return (
      <AuthContext.Provider value={{ currentUser }}>
        {children}
      </AuthContext.Provider>
    );
  }
};

export const useAuth = () => useContext(AuthContext);
