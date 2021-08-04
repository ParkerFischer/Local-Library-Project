/*
  Complete the functions below as described in the instructions.

  The `parks` parameter refers to an array of objects with the following shape:
  {
    id: 1,
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: { state: "Maine" },
  }

  The `users` parameter refers to an object with the following shape:
  {
    "karah.branch3": {
      visited: [1],
      wishlist: [4, 6],
    }
  }
*/

function getParksByState(parks, state) {

return parks.filter((park) => park.location.state === state)
}

function getWishlistParksForUser(parks, users, userName) {
   const usersWishlist = users[userName].wishlist;

return parks.filter((park) => usersWishlist.includes(park.id));

}

function userHasVisitedAllParksInState(parks, users, state, userName) {

let stateInQuestion = getParksByState(parks, state);
const usersVisited = users[userName].visited;

return stateInQuestion.every((park) => usersVisited.includes(park.id));
}

function userHasVisitedParkOnWishlist(users, userName1, userName2) {

const user1Visited = users[userName1].visited;
const user2Wishlist = users[userName2].wishlist;

return user2Wishlist.some((parks) => user1Visited.includes(parks))


}

function getUsersForUserWishlist(users, username) {

  const wishlist = users[username].wishlist; 
  const usersVisited = []
  for (user in users){
    if (user != username) {
      if (users[user].visited.some((park) => wishlist.includes(park))){
        usersVisited.push(user)
      }
    }


  }
  return usersVisited
  
}

module.exports = {
  getParksByState,
  getWishlistParksForUser,
  getUsersForUserWishlist,
  userHasVisitedAllParksInState,
  userHasVisitedParkOnWishlist,
};
