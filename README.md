Firebase Steps 

1. visit: console.firebase.google.com 
2. create project (Skip Google Analytics)
3. Register App
4. isntall firebase 
5. add config file to your project 
6. DANGER: Do not ppublish or make firebase config by pushing by github 
7. go to docs > build > authintication > Web > get started 
8. export app from the firebase.config.js file: export default app
9. Login.jsx: import getAuth form firebase/auth 
10. creat const auth = getAuth(app)
11. import googleAuthProvider and create a new provider 
12. use signInWithPopUp and pass auth and provider 
13.  activate sign-in method 
