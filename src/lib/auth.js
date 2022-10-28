import { useState, useEffect, useContext, createContext } from "react";
import {
	getAuth,
	createUserWithEmailAndPassword,
	GithubAuthProvider,
	signInWithPopup,
} from "firebase/auth";
import { createFirebaseApp } from "@/lib/firebase";
import { createUser } from "./db";
const app = createFirebaseApp();
const authContext = createContext();

export const useAuth = () => {
	return useContext(authContext);
};

export const AuthProvider = ({ children }) => {
	const auth = useAuthProvider();
	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

function useAuthProvider() {
	const [user, setUser] = useState(null);

	const firebaseauth = getAuth(app);

	const handleUser = async (data) => {
		if (data) {
			const user = await formatUserData(data);
			createUser(user.uid, user);
			setUser(user);
		} else {
			setUser(false);
		}
	};
	// Setup create user with Email and password
	const signupWithEmailAndPassword = (email, password) => {
		createUserWithEmailAndPassword(firebaseauth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				handleUser(user);
				return user;
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				handleUser(false);
				return false;
			});
	};

	const signinWithGithub = () => {
		const github = new GithubAuthProvider();

		signInWithPopup(firebaseauth, github)
			.then((result) => {
				const credential = GithubAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;

				const user = result.user;
				handleUser(user);
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GithubAuthProvider.credentialFromError(error);

				handleUser(false);
			});
	};

	return { user, signupWithEmailAndPassword, signinWithGithub };
}

const formatUserData = async (data) => {
	return {
		uid: data.uid,
		email: data.email,
		photoURL: data.photoURL,
	};
};
