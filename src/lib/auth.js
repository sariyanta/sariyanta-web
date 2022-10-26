import { createContext, useContext, useEffect, useState } from "react";
import { GithubAuthProvider, signInWithPopup, signOut, getAuth } from "firebase/auth";

import firebaseApp from "./firebase";
const app = firebaseApp();

const authContext = createContext();

export function AuthProvider({ children }) {
	const auth = useContextProviderAuth();

	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => useContext(authContext);

function useContextProviderAuth() {
	const [user, setUser] = useState(null);
	const auth = getAuth(app);
	const github = new GithubAuthProvider();
	function handleUser(rawUser) {
		if (rawUser) {
			const user = formatUser(rawUser);

			setUser(user);
			return user;
		} else {
			setUser(false);
			return false;
		}
	}

	const signInWithGithub = () => {
		signInWithPopup(auth, github).then((result) => {
			handleUser(result.user);
		});
	};

	const logout = () => {
		signOut(auth).then((result) => {
			handleUser(false);
		});
	};
	return { user, signInWithGithub, logout };
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
