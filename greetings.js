const greetings=["GoodMorning","GoodAfternoon","GoodNight"];
const currentHour=new Date().getHours();
let index=currentHour>=12 && currentHour<17?1:currentHour>=17?2:0;
console.log(greerings[index]);