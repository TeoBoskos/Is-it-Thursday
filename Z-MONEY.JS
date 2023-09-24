const moneyLMNT = document.querySelector('.pVariable')
let money = 200;
let extraMoney = 25;
moneyLMNT.innerHTML = money;


/*This is for the checkbox*/ 
const inputELEMENT = document.querySelector('.checkbox')
inputELEMENT.addEventListener('click', () => {
 
  setTimeout(() => {
    document.body.innerHTML = `DONE!`
  }, 3000)
 
  moneyLMNT.innerHTML = money + 25;
  money += 25;
})
console.log(money);
console.log(extraMoney);
/**/
