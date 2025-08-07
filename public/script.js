let age;
age = 14;

let maxAge;
maxAge = 8723;

let numPerDay;
numPerDay = 1;

let totalRequired;
totalRequired = (numPerDay * 365) * (maxAge - age);

let result = "You will need " + totalRequired + " cups of milk tea to last you until the ripe old age of " + maxAge + ".";
document.write(result)