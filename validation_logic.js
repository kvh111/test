// const fs = require("fs");

// fs.readFile('/Havya/test/apis/userids.json','utf-8', (err, data) =>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data)
//     const userIdsObject = JSON.parse(data);
//     const userIdsArray = userIdsObject['github-userids']
//     console.log(userIdsArray)
// })

const authorizedUsers = require('./apis/userids.json');
console.log(authorizedUsers)
// Get the pull request author's username from command-line arguments
const pullRequestAuthor = process.argv[2];

// Check if the pull request author is in the list of authorized users
if (authorizedUsers['github-userids'].includes(pullRequestAuthor)) {
  console.log(`${pullRequestAuthor} is an authorized user.`);
} else {
  console.log(`${pullRequestAuthor} is not an authorized user. PR rejected.`);
  process.exit(1); // Exit with a non-zero status code to indicate failure
}

