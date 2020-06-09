// console.log("Before");
// getUser("9818773688")
//   .then((res) => getVideos(res))
//   .then((res) => getVideoInfo(res))
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// function getUser(mobileNo) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Reading from DB :", mobileNo);
//       resolve({ id: 1, mobileNo: 9818773688, name: "saksham" });
//     }, 2000);
//   });
// }
// function getVideos(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Reading from DB :", id);
//       resolve(["1", "2", "3"]);
//       // reject("error here");
//     }, 2000);
//   });
// }

// function getVideoInfo(videoIds) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Reading Video Info DB :", videoIds);
//       resolve([
//         {
//           id: 1,
//           title: "Good Morning",
//         },
//         {
//           id: 2,
//           title: "Good AfterNoon",
//         },
//         {
//           id: 3,
//           title: "Good Night",
//         },
//       ]);
//     }, 2000);
//   });
// }

// console.log("After");
// all Assignment - Suppose you have a user name through that get user_id, through user_id get
//userRepositories and get commits by repository_id.
// Solve it using callback and Promise. Pls share both callback and
//promise implementation before the next session tomorrow.

const name = "prateek";

getUserID(name, (id) => {
  getUserRepo(id, (getRepo) => {
    getRepoCommits(getRepo.repoID, (commits) => {
      console.log(commits);
    });
  });
});

function getUserID(userName, callback) {
  const user = [
    { id: 1, name: "saksham" },
    { id: 2, name: "prateek" },
    { id: 3, name: "kartik" },
  ];
  const getUser = user.find((itr) => itr.name === userName);
  callback(getUser.id);
}

function getUserRepo(id, callback) {
  const user = [
    { repoID: 1, name: "project1" },
    { repoID: 2, name: "project2" },
    { repoID: 3, name: "project3" },
  ];
  const getRepo = user.find((itr) => itr.repoID === id);
  callback(getRepo);
}

function getRepoCommits(id, callback) {
  const user = [
    { commitID: 1, name: "commit_1" },
    { commitID: 2, name: "commit_1" },
    { commitID: 3, name: "commit_1" },
  ];
  const getCommit = user.find((itr) => itr.commitID === id);
  callback(getCommit);
}
