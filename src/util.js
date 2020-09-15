import React from "react";

export const shuffleArray = (arr) => {
  let j, x, i;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = arr[i];
    arr[i] = arr[j];
    arr[j] = x;
  }
  return arr;
};

export const chunk = (arr, num) => {
  const chunked = [];

  for (let elem of arr) {
    let last = chunked[chunked.length - 1];
    if (!last || last.length === num) {
      chunked.push([elem]);
    } else {
      last.push(elem);
    }
  }
  return chunked;
};

export const sliceArrFunc = (array, sliceFrom, sliceTil) => {
  let j = array.slice(sliceFrom, sliceTil);
  return j;
};

/*

USER WANTS: 
10 total players 
2 teams
3 players each team

1. make sure that the num of total plyers is equal or bigger than the mult of numOfTeams and PlayersEachTeam.
if no, display message to the user. if everything ok, continue to next steps:

2. I  have original array of names I got from user inputs: 
['Hadar', 'Oran', 'Amit', 'Omri', 'Eldad', 'Yaron', 'Nisim', 'Jimi', 'Moti', 'David']

3. take the arr of name and shuffle it
['Eldad', 'Oran', 'Nisim', 'David', 'Amit', 'Omri', 'Jimi', 'Moti', 'Yaron', 'Hadar']

4. take the shuffled array and split to array of arrays, in each array push the num of players each team
[ ['Eldad', 'Oran', 'Nisim'], ['David', 'Amit', 'Omri'], ['Jimi', 'Moti', 'Yaron'], ['Hadar'] ]

5. take the array of arrays, and slice from this array the first two arrays
[ ['Eldad', 'Oran', 'Nisim'], ['David', 'Amit', 'Omri'] ]

6. loop/map and through the new array of arrays and display to the user.
-----------------------------------------------------------------------------------------------------------------------**

USER WANTS:
5 total players
2 teams
5 players each team

1. I  have original array of names I got from user inputs: 
['Hadar', 'Oran', 'Amit', 'Omri', 'Eldad', 'Yaron', 'Nisim', 'Jimi', 'Moti', 'David']

2. take the arr of name and shuffle it
['Eldad', 'Oran', 'Nisim', 'David', 'Amit', 'Omri', 'Jimi', 'Moti', 'Yaron', 'Hadar']


*/

/*
Conclusions:
1) make sure that the num of total plyers is equal or bigger than the mult of numOfTeams and PlayersEachTeam
2) 

*/

export const limitedArr = () => {};
