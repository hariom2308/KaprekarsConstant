function KaprekarsConstant(num){
  if (typeof num != "number"){
    throw new Error("Please enter 4 digit integer");
  }
  if (num % 1 != 0 || num.toString().length != 4 ){
    throw new Error("Please enter 4 digit integer");
  }
  function CalcKaprekarsConstant(num){

    if (num.toString().length < 4){
      num = num.toString() + '0';
    }
    if (num == 6174){
      return 0;
    }
    num = parseInt(num.toString()
    .split("")
    .sort()
    .reverse().
    join(""), 10)
    - parseInt(num.toString()
    .split("")
    .sort()
    .join(""), 10) ;

    return 1 + CalcKaprekarsConstant(num);
  }
  return CalcKaprekarsConstant(num);
}

module.exports = KaprekarsConstant;
