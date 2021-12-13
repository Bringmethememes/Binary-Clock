setInterval(jebekMilos, 100);

function jebekMilos()
{
  const date = new Date();
  let seconds = dec2bin(date.getSeconds());
  let minutes = dec2bin(date.getMinutes());
  let hours = dec2bin(date.getHours());

  console.log(hours);

  for(let i = 1; i < 7; i++){
    
    let temp = "3"+ i;
    temp = document.getElementById(temp)

   if(seconds.charAt(i) == 1 ){
    temp.classList.add("kruhOn")
    temp.classList.remove("kruh")
   }
   else{
    temp.classList.add("kruh")
    temp.classList.remove("kruhOn")
   }
  }

  for(let i = 1; i < 7; i++){
    
    let temp = "2"+ i;
    temp = document.getElementById(temp)

   if
   (minutes.charAt(i) == 1 ){
    temp.classList.add("kruhOn")
    temp.classList.remove("kruh")
   }
   else
   {
    temp.classList.add("kruh")
    temp.classList.remove("kruhOn")
   }
  }

  for(let i = 1; i < 7; i++){
    
    let temp = "1"+ i;
    console.log(temp);
    temp = document.getElementById(temp)
    console.log(temp)

   if(hours.charAt(i) == 1 ){
    temp.classList.add("kruhOn")
    temp.classList.remove("kruh")
   }
   else{
    temp.classList.add("kruh")
    temp.classList.remove("kruhOn")
   }
  }
  










}
function dec2bin(dec) {
  let temp = (dec >>> 0).toString(2);
  while(temp.length < 7){
      temp = "0" + temp;
  }
  return temp;
}