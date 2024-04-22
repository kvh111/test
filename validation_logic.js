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


// Get the pull request author's username from command-line arguments
const pullRequestAuthor = process.argv[2];
const changedfiles = process.argv.slice(3);
console.log(changedfiles)

const changedFilesArray = changedfiles.split(" ")

for(let i=0;i<changedFilesArray.length;i++){
    if(!changedFilesArray[i].includes(".md")){
        const parts = changedFilesArray[i].split("/");
        const name = parts[1];
        console.log(name);
        const authorizedUsers = require(`./apis/${name}/userids.json`);
        console.log(authorizedUsers)    
    }
}




// Check if the pull request author is in the list of authorized users
if (authorizedUsers['github-userids'].includes(pullRequestAuthor)) {
  console.log(`${pullRequestAuthor} is an authorized user.`);
} else {
  console.log(`${pullRequestAuthor} is not an authorized user. PR rejected.`);
  process.exit(1); // Exit with a non-zero status code to indicate failure
}

