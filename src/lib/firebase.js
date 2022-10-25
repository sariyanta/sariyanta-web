import { getApps, initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export default function firebaseApp() {
	if (!getApps().length) {
		return initializeApp({
			apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
			authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
			projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
		});
	}
}
