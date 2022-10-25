import { createContext, useContext, useEffect, useState } from "react";
import {
	onAuthStateChanged,
	GithubAuthProvider,
	signInWithPopup,
	signOut,
	getAuth,
} from "firebase/auth";

import firebaseApp from "./firebase";
const app = firebaseApp();

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export function AuthContextProvider({ children }) {
	const [user, setUser] = useState(null);
	const auth = getAuth(app);

	const handleUser = (rawUser) => {
		if (rawUser) {
			const user = formatUser(rawUser);

			setUser(user);
			return user;
		} else {
			setUser(false);
			return false;
		}
	};

	const signInWithGithub = () => {
		const provider = new GithubAuthProvider();
		signInWithPopup(auth, provider)
			.then((result) => {
				handleUser(result.user);
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GithubAuthProvider.credentialFromError(error);
				// ...
			});
	};

	const logout = () => {
		signOut(auth).then((result) => {
			handleUser(false);
		});
	};
	return (
		<AuthContext.Provider value={{ user, signInWithGithub, logout }}>
			{children}
		</AuthContext.Provider>
	);
}

const formatUser = (user) => {
	return {
		uid: user.uid,
		email: user.email,
		name: user.displayName,
		provider: user.providerData[0].providerId,
		photoUrl: user.photoURL,
	};
};
