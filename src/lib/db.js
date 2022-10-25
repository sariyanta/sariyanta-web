import firebaseApp from "./firebase";
import { getFirestore } from "firebase/firestore";

const app = firebaseApp();
const firestore = getFirestore(app);

export function createUser(uid, data) {
	return firestore
		.collection("users")
		.doc(uid)
		.set({ uid, ...data }, { merge: true });
}
