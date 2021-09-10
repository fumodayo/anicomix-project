import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app =  firebase.initializeApp({
    apiKey: "AIzaSyAoLM800jN60Q_U3JvKl4wmtUI2pntyKq8",
    authDomain: "auth-anicomix.firebaseapp.com",
    projectId: "auth-anicomix",
    storageBucket: "auth-anicomix.appspot.com",
    messagingSenderId: "913560341790",
    appId: "1:913560341790:web:b384cd2ce190aa6158cd0f"
})

export const auth = app.auth()
export default app
