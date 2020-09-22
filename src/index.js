let num = ['zero', 'one', 'two', 'three', 'four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen'];
let num2 = ['twenty', 'thirty', 'forty','fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
module.exports = function toReadable (number) {
if(number < 20){
    return getNum(number);
}
if(number >= 20 && number < 100){
  return getNumber(number);
}
if(number >= 100 && number < 1000){
  let mod = number % 100;
  if(mod === 0){
    return `${num[String(number)[0]]} hundred`;
  }
  if(mod < 20){
    return `${num[String(number)[0]]} hundred ${getNum(mod)}`;
  }
  if(mod >= 20){
    return `${num[String(number)[0]]} hundred ${getNumber(mod)}`;
  }
}
return 0;
}
function getNum(number)
{
  if(number < 14){
    return num[number];
  } 
  
  if(number >= 14 && number < 20){
    if(number == 15){
      return 'fifteen';
    }
    if(number === 18){
        return 'eighteen';
      }
    return `${num[String(number)[1]]}teen`;  
  }
}
function getNumber(number){
  let out = '';
  let n = String(number);
  switch(Number(n[0])){
    case 2:
      out += num2[0];
      break;
    case 3:
      out += num2[1];
      break;
    case 4:
      out += num2[2];
      break;
    case 5:
      out += num2[3];
      break;
    case 6:
      out += num2[4];
      break;
    case 7:
      out += num2[5];
      break;
      case 8:
        out += num2[6];
        break;
      case 9:
        out += num2[7];
        break;
  }
  return String(number)[1] === '0' ? out : `${out} ${num[String(number)[1]]}`;
}
