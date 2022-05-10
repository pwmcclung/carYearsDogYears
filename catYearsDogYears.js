var humanYearsCatYearsDogYears = function(humanYears) {
  let dog = 0 ;
  let cat = 0;
  
  if (humanYears ===1 ){
    cat = 15
    dog = 15
  }else if(humanYears === 2){
    cat = 15 + 9
    dog = 15 + 9
  }else{
    cat = (15 + 9) +((humanYears -2) * 4)
    dog = (15 + 9) +((humanYears -2) * 5)
  }
  
  return [humanYears,cat,dog];
}
