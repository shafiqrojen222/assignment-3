// feetToMile

// function feetToMile(feet)
// {
//     var mile=feet*0.00018939;
//     return mile;
// }
// var result= feetToMile(2000);
// console.log(result);

// woodCalculator

// function woodCalculator(chair,table,bed){

//     var chair=chair*1;
//     var table =table*3;
//     var bed = bed*5;

//     var totalWood = chair+table+bed;

//     return totalWood;

// }
// var result = woodCalculator(5,5,5);
// console.log(result);

// brickCalculator

// function brickCalculator(floor)
// {
//   if(floor>=1 && floor<=10)
//   {
//       var brickNeeded = 15*1000;
//       return brickNeeded;
//   }
//   else if(floor>=11 && floor<=20)
//   {
//       var brickNeeded=12*1000;
//       return brickNeeded;
//   }
//   else{
//       var brickNeeded =10*1000;
//       return brickNeeded
//   }
// }
// var totalBrick = brickCalculator(10);
// console.log(totalBrick);

// tinyFriend

function tinyFriend(friend)
{
    var tiny = friend[0];
    for(var i=0; i<friend.length; i++)
    {
        var element = friend[i];
        if(element<tiny)
        {
            tiny=element;
        }
       
    }
    return tiny;

}

var friends = ['habib','Aziz','Rahim','Karim','DabDeb'];
var result = tinyFriend(friends);
console.log(result);
