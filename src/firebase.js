import { getFirestore } from '@firebase/firestore'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyD5Y4ZQAkAvaEOsHzqHBRT_CFa2YKGW-ho",
    authDomain: "squid-game-b08a8.firebaseapp.com",
    projectId: "squid-game-b08a8",
    storageBucket: "squid-game-b08a8.appspot.com",
    messagingSenderId: "858455799787",
    appId: "1:858455799787:web:f07a7fe24c4098cc0ccbae",
    measurementId: "G-J30D1ZGG5M"
}

initializeApp(firebaseConfig)

export const db = getFirestore()
