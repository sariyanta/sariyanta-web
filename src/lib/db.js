import { createFirebaseApp } from "./firebase";
import { doc, setDoc, getFirestore } from "firebase/firestore";
const app = createFirebaseApp();
const db = getFirestore(app);

export function createUser(uid, data) {
	try {
		const userDoc = doc(db, "users", uid);
		setDoc(userDoc, { uid, ...data }, { merge: true });
	} catch (error) {
		console.log(error);
	}
}
