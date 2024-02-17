import { createUserWithEmailAndPassword } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from '../Firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProviser = ({children}) => {

    const [user, setUser] = useState(null);

    const creatUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);

    }
    const authInfo = {user,creatUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviser;
AuthProviser.propTypes ={
    children: PropTypes.node
}