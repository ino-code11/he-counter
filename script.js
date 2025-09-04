// Firestoreを使う場合は、Firebaseの設定をここに貼る
const firebaseConfig = {
  apiKey: "AIzaSyD4zdJVnpDgp2JJur2XBq9fUoSta1VlGl4",
  authDomain: "he---count-machine.firebaseapp.com",
  projectId: "he---count-machine",
  storageBucket: "he---count-machine.firebasestorage.app",
  messagingSenderId: "1077436845977",
  appId: "1:1077436845977:web:57217d7983827ad8ca4d08",
  measurementId: "G-LMW772R14C"
};

// （前にFirebaseからコピーした「const firebaseConfig = { ... }」のやつ）

// 初期化（前に案内したfirebase.initializeApp(firebaseConfig); が必要）
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const btn = document.getElementById("heyBtn");
const countDiv = document.getElementById("count");

// Firestoreのドキュメント参照
const counterRef = db.collection("counter").doc("main");

// 初期読み込み & リアルタイム更新
counterRef.onSnapshot((doc) => {
  if (doc.exists) {
    countDiv.textContent = doc.data().value;
  } else {
    counterRef.set({ value: 0 });
  }
});

// ボタン押したときの処理
btn.addEventListener("click", () => {
  counterRef.update({
    value: firebase.firestore.FieldValue.increment(1)
  });
});
