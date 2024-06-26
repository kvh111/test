const pullRequestAuthor = process.argv[2];
const changedfiles = process.argv[3];
console.log(changedfiles)


const regex = /\s+|\[|\]|'/g;
const output = changedfiles.split(regex);
console.log(output)

for(let i=0;i<output.length;i++){
    if(!output[i].includes(".md")){
        const parts = output[i].split("/");
        const name = parts[1];
        console.log(name);
        const authorizedUsers = require(`./apis/${name}/userids.json`);
        console.log(authorizedUsers)    
        if (authorizedUsers['github-userids'].includes(pullRequestAuthor)) {
            console.log(`${pullRequestAuthor} is an authorized user.`);
          } else {
            console.log(`${pullRequestAuthor} is not an authorized user. PR rejected.`);
            process.exit(1); // Exit with a non-zero status code to indicate failure
          }
    }
}




// Check if the pull request author is in the list of authorized users


