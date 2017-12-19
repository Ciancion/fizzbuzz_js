function FizzBuzz () {}

FizzBuzz.prototype.play = function(number) {
  if (number < 0) {
    return "Please choose a positive number"
  };
  if (number === 0) {
    return 0
  };
  if (number % 3 === 0 && number % 5 === 0)
    return "fizzbuzz"
  else if(number % 5 === 0)
    return "buzz"
  else if(number %3 === 0)
    return "fizz"
  else
    return number
};
