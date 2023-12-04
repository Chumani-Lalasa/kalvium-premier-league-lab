//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function managerArray(managerName,managerAge,currentTeam,trophiesWon){
  var managerInfo = [managerName,managerAge,currentTeam,trophiesWon];
  return managerInfo;
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation){
  if(formation.length == 3){
    var planOfAction = {
      defender:formation[0],
      midfield:formation[1],
      forward:formation[2]
  }
  }else{
    return null;
  }
  return planOfAction;
}


// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  var data = players.filter(player => player.debut == year);
  return data;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  var data = player.filter(player.position == position);
  return data;
} 

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName){
  let a = [];
  for(let i=0;i<length;i++){
    for(let j=0;j<length;j++){
      if(players[i].awards[j].name === awardName){
        a.push(players[i]);
      }
    }
  }
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName,noOfTimes){
  let a=[];
  let count =0;
  for(let i=0;i<players.length;i++){
    for(let j=0; j<players[i].awards.length;j++){
      if(players[i].awards === awardName){
        count+=1;
      }
    }
    if(count===noOfTimes){
      a.push(players[i]);
    }
  }
  return a;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName,country){
  var awardsData = filterByAward(awardName);
  var countryData = awardsData.filter(player => player.country == country);

  return countryData;
}

//Progression 8 - Filter players that won atleast _______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards,team,age){
  var data = players.filter(player =>(
    player.age< age && player.team==team && player.awards.length>=noOfAwards
  ));
  return data;
}

//Progression 9 - Sort players in descending order of their age
function sort(){
  for(let i=0;i<players.length;i++){
    for(let j=0;j<players.length;j++){
      if(players[i].age<players[j].age){
        let temp=players[i];
        players[i]=players[j];
        players[j]=temp;
      }
    }
  }
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function filterByTeamxSortByNoOfAwards(team){
  let count =0;
  let a=[];
  for(let i=0;i<players.length;i++){
    if(players[i].team==team){
      a[count++]=players[i];
    }
  }
  for(let i=0;i<a.length;i++){
    for(let j=1;j<a.length;j++){
      if(a[i].awards.length<a[j].awards.length){
        let temp=a[i];
        a[i]=a[j];
        a[j]=temp;
      }
    }
  }
  return a;
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function compare(a,b){
  let value = 0;
  if(a.name<b.name){
    value=1;
  }else if(a.name<b.name){
    value=-1;
  }else{
    value=0;
  }
}
function SortByNamexAwardxTimes(awardName,noOfTimes,country){
  var a = filterByAwardxTimes(awardName,noOfTimes);
  var b= a.filter(player => player.country == country);

  return b.sort(compare);
}


//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNameOlderThan(age){
  var data = players.filter(player => player.age>age);
  return data;
}
