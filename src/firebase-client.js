import firebaseClient from "firebase/app";
import "firebase/storage";

const CLIENT_CONFIG = {
    apiKey: "---api-key---",
    authDomain: "fir-e2e00.firebaseapp.com",
    databaseURL: "https://fir-e2e00.firebaseio.com",
    projectId: "fir-e2e00",
    storageBucket: "fir-e2e00.appspot.com",
    messagingSenderId: "257922006170",
    appId: "1:257922006170:web:ede309131b59f59fb3f323"

};

if (typeof window !== "undefined" && !firebaseClient.apps.length) {
  firebaseClient.initializeApp(CLIENT_CONFIG);
}

export { firebaseClient };