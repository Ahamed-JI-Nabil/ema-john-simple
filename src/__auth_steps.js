/**
 * 1. create a new firebase project in console.firebase.google.com
 * 2. npm install firebase
 * 3. create firebase.init.js and pest firebase initialize code in it.
 * 4. in firebase.init.js import getAuth form firebase/auth and pass app as parameter then export default auth.
 *  5. firebase setting > authentication > enable auth provider (email-password, google, facebook, github, etc)
 * 6. create login, signup component setup route   
 * 7. attach form field handler and form submit handler.
 * 8. install firebase hooks ( npm install --save react-firebase-hooks )
 * 9. useCreateUserWithEmailAndPassword form react-firebase-hooks.
 * 10. if user is created redirect to the expected page
 * 11. useSignInWithEmailAndPassword for sign in.
 * 12. create require auth component ==> check user exist , also track user location
 * 13. in route wrap protected component by using require auth component 
*/ 



/**
 * firebase hosting steps
 * 
 * 1. npm install -g firebase-tools ( one time for your computer )
 * 2. firebase login ( one time for your)
 * 3.firebase init (one time for each project)
 * 4. npm run build (every time you want to deploy build your project)
 * 4. firebase deploy
*/