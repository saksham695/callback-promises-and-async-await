// all Assignment - Suppose you have a user name through that get user_id, through user_id get
//userRepositories and get commits by repository_id.
// Solve it using callback and Promise. Pls share both callback and
//promise implementation before the next session tomorrow.

const name = "prateek";

getUserID(name)
  .then((res) => {
    console.log(res);
    return getUserRepo(res.id);
  })
  .then((userRepo) => {
    console.log(userRepo);
    return getRepoCommits(userRepo.repoID);
  })
  .then((userCommits) => console.log(userCommits))
  .catch((err) => {
    console.log(err);
  });

function getUserID(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = [
        { id: 1, name: "saksham" },
        { id: 2, name: "prateek" },
        { id: 3, name: "kartik" },
      ];
      const getUser = user.find((itr) => itr.name === userName);
      getUser
        ? resolve(getUser)
        : reject(new Error("No user exists with this name"));
    }, 200);
  });
}

function getUserRepo(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = [
        { repoID: 1, name: "project1" },
        { repoID: 2, name: "project2" },
        { repoID: 3, name: "project3" },
      ];
      const getRepo = user.find((itr) => itr.repoID === id);
      getRepo
        ? resolve(getRepo)
        : reject(new Error("Repository not available with this id"));
    }, 200);
  });
}

function getRepoCommits(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = [
        { commitID: 1, name: "commit_1" },
        { commitID: 4, name: "commit_1" },
        { commitID: 3, name: "commit_1" },
      ];

      user
        ? resolve(user)
        : reject(new Error("User has no commits with this repoID"));
    }, 200);
  });
}
