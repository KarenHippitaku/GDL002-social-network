const signupForm = document.querySelector('#signup-form');
// let user =
firebase.auth().createUser(user => {
  // if (!user)
  signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection("Users data").doc(uid).add({
    email: "blah123@mel.com",
    emailVerified: false,
    password: "blah123",
    displayName: "Equis Nombre",
    photoUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
})
.then(function(userRecord){
    console.log("nuevo usario creado:", userRecord.uid);
})
.catch(function(error){
    console.log("error creando usuario");
})

// //get data
// db.collection('posts').get().then(snapshot => {
//     setupPosts(snapshot.docs)
// })

// //listen for auth status changes
// auth.onAuthStateChanged(user => {
//     if (user) {
//         console.log('user logged in', user);
//     } else {
//         console.log('user logged out');
//     }
// })
//
// //signup
// const signupForm = document.querySelector('#signup-form');
// signupForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     //get user info
//     const nickname = signupForm['singup-nickname'].value;
//     const email = signupForm['signup-email'].value;
//     const verifiedEmail = signupForm['verified-email'].value;
//     const password = signupForm['signup-password'].value;
//     const verifiedPassword = signupForm['verified-password'].value;
//
//     if (email === verifiedEmail && password === verifiedPassword) {
//         auth.createUserWithEmailAndPassword(email, password, nickname)
//             .then(cred => {
//                 signupForm.reset();
//             })
//
//     } else {
//         alert("Por favor revisa tus datos y vuelve a intentarlo.")
//     }
// })
//
// //saving data
// signupForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   db.collection('Users data').add({
//     UID: uid.value,
//     nickname: form.displayName.value,
//     email: form.email.value,
//     password: form.password.value
//   });
//   form.displayName.value;
//   form.email.value;
//   form.password.value;
// })
// //logout
// const logout = document.querySelector('#logout');
// logout.addEventListener('click', (e) => {
//     e.preventDefault();
//     auth.signOut()
// })
//
// //login
// const loginForm = document.querySelector('#login-form');
// loginForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     //get user info
//     const email = loginForm['login-email'].value;
//     const password = loginForm['login-password'].value;
//
//     auth.signInWithEmailAndPassword(email, password)
//         .then(cred => {
//             loginForm.reset();
//         })
// })
//
//
// //update nickname
// const updateForm = document.querySelector('#account-details');
// updateForm.addEventListener('submit', (e) => {
//     const nickname = document.querySelector('#update-nickname').value;
//     const user = firebase.auth().currentUser;
//
//     user.updateProfile({
//         displayName: nickname
//     }).then(cred => {
//         updateForm.reset();
//     })
//     .then(console.log(user))
//   })

  // let user = firebase.auth().currentUser;
  // if (!user) {
  //   return;
  // }
  //
  // let text = getElementById('#post').value;
  // let url = getElementById('news-url').value;
  // let db = firebase.firestore();
  // db.collection('posts').add({
  //   text: text,
  //   url: url,
  //   type: type,
  //   userId: user.uid,
  //   displayName: user.displayName,
  //   date: new Date().toJSON()
  // })
  // .then(function(docRef) {
  //   console.log('document written with ID: ', docRef.id);
  // })
  // .catch(function(){
  //   console.error('Error adding document: ', error);
  // });
