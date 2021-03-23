function lifePathNumber(dateOfBirth) {
   let lifeNum = 0; 
   const dateArray = dateOfBirth.split("-");

   for (let i = 0; i < dateArray.length; i++) {
    //dateArray[i] = parseInt(dateArray[i]);
    dateArray[i].split('');
    for(let j = 0; j < dateArray[i].length; j++){
        lifeNum += parseInt(dateArray[i][j]);

        if(dateArray[i][j].toString().length >= 2){
           lifeNum += lifePathNumber(dateArray[i][j])
        } else {
    }
             lifeNum += dateArray[i]
         }

    }
   
  
   return lifeNum;
  }


  function arraySum(arr) {
    let sum = 0;
    let childsum = 0;
    for (let i=0 ; i < arr.length; i++){
    const child = arr[i];
    if (Array.isArray(child)){
    sum+= arraySum(child);
    } else if (Number.isFinite(child)){
    sum+=child;
    }
    }
    return sum ;
    }

        console.log(lifePathNumber("1879-03-14"),'-->', 6) 
        console.log(lifePathNumber("1815-12-10"),'-->', 1)
        console.log(lifePathNumber("1961-07-04"),'-->', 1) 
        console.log(lifePathNumber("1955-10-28"),'-->', 4) 
        console.log(lifePathNumber("1452-04-15"),'-->', 4)