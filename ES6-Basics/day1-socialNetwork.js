/*
Implement solutions to the following questions/problems by writing functions for each one:

Tips
You are encouraged to create some additional functions in order to avoid having very large functions that try to do everything. That said, be sure to name them well. All this may sound familiar - that's because it was covered recently as part of our Function Best Practices.
 */

const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"],
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"],
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"],
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"],
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"],
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"],
  },
};

/*
Instruction
Implement a function biggestFollower() which returns the name of the individual who follows the most people.
*/

const biggestFollower = function (data) {
  let biggestFollowerName;
  let biggestFollowerTotal = 0;

  for (const userId in data) {
    if (data[userId].follows.length > biggestFollowerTotal) {
      biggestFollowerTotal = data[userId].follows.length;
      biggestFollowerName = data[userId].name;
    }
  }
  return biggestFollowerName;
};

//console.log(biggestFollower(data));

/*
Instruction
Implement mostPopular() which returns the name of the most popular (most followed) individual.
*/

const mostPopular = function (data) {
  const totalFollowersLabel = "totalFollowers";
  let mostPopularName;
  let mostTotalFollowers = 0;

  for (const userId in data) {
    data[userId].follows.forEach((element) => {
      if (!data[element].hasOwnProperty(totalFollowersLabel)) {
        data[element][totalFollowersLabel] = 0;
      }
      data[element].totalFollowers++;
    });
  }
  for (const userId in data) {
    if (data[userId].totalFollowers > mostTotalFollowers) {
      mostTotalFollowers = data[userId].totalFollowers;
      mostPopularName = data[userId].name;
    }
  }
  return mostPopularName;
};
//console.log(mostPopular(data));
/*
Instruction
Implement printAll() which outputs a list of everyone and for each of them, the names of who they follow and who follows them.
*/

const printAll = function (data) {
  for (const userId in data) {
    let followIds = data[userId].follows;
    //console.log(followIds);

    let followNames = followIds.map((followId) => {
      return data[followId].name;
    });
    data[userId]["followNames"] = followNames;

    let nameOfFollowers = "nameOfFollowers";
    data[userId].follows.forEach((element) => {
      if (!data[element].hasOwnProperty(nameOfFollowers)) {
        data[element][nameOfFollowers] = [];
      }
      data[element][nameOfFollowers].push(data[userId].name);
    });
  }

  for (const userId in data) {
    //console.log(`${data[userId].name} follows ${data[userId].followNames} and is followed by ${data[userId].nameOfFollowers}`);
  }
};
printAll(data);

/*
Instruction
Implement unrequitedFollowers() which returns a list of names for those who follow someone that doesn't follow them back.
*/
const unrequitedFollowers = function (data) {
  let doNotFollowBack = new Set();
  for (const userId in data) {
    data[userId].follows.forEach((element) => {
      if (!data[element].follows.includes(userId)) {
        doNotFollowBack.add(data[userId].name);
      }
    });
  }
  return doNotFollowBack;
};
//console.log(unrequitedFollowers(data));

/*
Instruction
Implement some or all these remaining functions.
Identify who has the most followers over 30
*/
const mostFollowersOver30 = (data) => {
  let nameOfFollowersOver30 = "nameOfFollowersOver30";
  let numberOfFollowersOver30 = 0;
  let mostFollowersOver30;
  for (const userId in data) {
    data[userId].follows.forEach((element) => {
      if (!data[element].hasOwnProperty(nameOfFollowersOver30)) {
        data[element][nameOfFollowersOver30] = [];
      }
      if (data[userId].age > 30) {
        data[element][nameOfFollowersOver30].push(data[userId].name);
      }
    });
  }
  console.log(data);
  for (const userId in data) {
    if (data[userId].nameOfFollowersOver30.length > numberOfFollowersOver30) {
      numberOfFollowersOver30 = data[userId].nameOfFollowersOver30.length;
      mostFollowersOver30 = data[userId].name;
    }
  }
  return mostFollowersOver30;
};
//console.log(mostFollowersOver30(data));
/*Identify who follows the most people over 30*/

const followsPeopleOver30 = (data) => {
  let nameOfMostFollowsOver30 = "";
  let sizeOfFollowsOver30 = 0;
  for (const userId in data) {
    let followsOver30 = data[userId].follows.filter((followId) => {
      return data[followId].age > 30;
    });
    if (followsOver30.length > sizeOfFollowsOver30) {
      sizeOfFollowsOver30 = followsOver30.length;
      nameOfMostFollowsOver30 = data[userId].name;
    }
  }
  return nameOfMostFollowsOver30;
};
console.log(followsPeopleOver30(data));

/*List everyone and their reach (sum of # of followers and # of followers of followers)*/

const calculateReach = (data) => {
  const reach = {};
  for (const user in data) {
    console.log(data[user].name);

    const directFollowers = [];
    for (const potentialFollower in data) {
      if (data[potentialFollower].follows.includes(user)) {
        directFollowers.push(potentialFollower);
      }
    }

    const followerOfFollowers = new Set();
    directFollowers.forEach((follower) => {
      data[follower].follows.forEach((inDirectFollower) => {
        followerOfFollowers.add(inDirectFollower);
      });
    });

    reach[data[user].name] = {
      directFollower: directFollowers.length,
      inDirectFollowers: followerOfFollowers.size,
      total: directFollowers.length + followerOfFollowers.size,
    };
  }
  return reach;
};

console.log(calculateReach(data))