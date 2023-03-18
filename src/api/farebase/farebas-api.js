import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  GoogleAuthProvider} from "firebase/auth"
import {getFirestore, getDoc, setDoc, doc, collection} from "firebase/firestore"
import {initializeApp} from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyB67pXxJNp80KN6FHdWUvFj4Bdh2is4xA4",
  authDomain: "bankir-app.firebaseapp.com",
  projectId: "bankir-app",
  storageBucket: "bankir-app.appspot.com",
  messagingSenderId: "1056425137146",
  appId: "1:1056425137146:web:773f9a1a83871e33944a43",
  measurementId: "G-YQBG1VR70Y"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

export const auth = getAuth(firebaseApp)

export const db = getFirestore()

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const createUserDocumentFromAuth = async (userData, userName = {}) => {

  if(!userData) return

  const userDocRef = doc(db, "users", userData.uid)
  console.log("docRef", userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  console.log("snapshot", userSnapshot.exists())

  if (!userSnapshot.exists()) {

    const createdAt = new Date()

    const storeData = {
      displayName: userName.displayName || userData.displayName,
      email: userData.email,
      createdAt
    }

    try {

      await setDoc(userDocRef, {
        ...storeData
      })

    } catch (e){
      console.log(e)
    }

  }

}

export const userSingInWithEmailAndPassword = async (email, password) => {
  return await  signInWithEmailAndPassword(auth, email, password)
}

export const createAuthWithEmailAndPassword = async (email, password) => {

  return await createUserWithEmailAndPassword(auth, email, password)
}