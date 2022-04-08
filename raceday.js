let raceNumber = Math.floor(Math.random() * 1000);

let early = true;
let age = 18;

if(early && age > 18) {
  raceNumber += 1000;
}

if(age >= 18 && early) {
  console.log(`Race will begin at 9:30. your race number is ${raceNumber}`);
}

else if(age >= 18 && !early) {
  console.log(`As you are an adult and are late your race will start at 11:00. Your race number is: ${raceNumber}`);
}

else if(age < 18) {
  console.log(`You are under 18 so your race will start at 12:30. Your race number is: ${raceNumber}`);
}

else {
  console.log('See registration desk, Thank you.');
}

// Made by Chiz
