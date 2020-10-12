/* Create Skillpas dashboard with Sign In form. Once sign in, if it's correct, it goes to our profile, where we can view our quote, skills, experience, interests etc
We need a database with multiple users 
*/
// 2. Database. Create an array which contains the object you have made above and name the array "database".
var database = [
  {
    username: "Brian",
    password: "Welcom",
  },
  {
    username: "Lucelle",
    password: "Welcom1",
  },
  {
    username: "Daniel",
    password: "Welcom3",
  },
];
// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var profile = [
  {
    /*         id: userid(),
     */ img: "profile.jpg",
    overMij: "Achtergrond, hobbies etc",
    werk:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    opleidingen:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    certificaten:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    talenten:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    vaardigheden:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    vervoer:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    uploads:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...", // if no video/url, the icon will not show
  },
];

// 5. Action. When Sign In, I want to get my profile and wheather my user and password is in(correct).
//7
function isUserValid(username, password) {
  // 6. check 1st, 2nd and 3rd item in array database
  for (var i = 0; i < database.length; i++) {
    //looping through everything
    if (
      //if credentials match return true
      username === database[i].username &&
      password === database[i].password
    ) {
      return true; //function stops & exits when see return
    }
  }
  return false; //if it does the looping 3 times and 'if' condition never passes it goes to the next line and will return false
}
// II. IF ISUSERVALID? IF YES, THEN LOG PROFILE. 6 Logic: to sign in what do we need?
function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(profile);
  } else {
    //III. OTHERWISE WRONG U/P. if isUserValid false
    alert("Sorry, wrong username and/or password");
  }
}
// 4. Form. Building Sign In form
var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");
//I. SIGN IN, HERE IS THE USER NAME&PASSWOORD. Give two arguments to match parameters
signIn(userNamePrompt, passwordPrompt);
