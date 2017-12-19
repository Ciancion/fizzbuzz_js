
describe("FizzBuzz", function() {
  var fizzBuzz

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });


it("should be fizz if the number is multiple of 3 ", function() {
  expect(fizzBuzz.play(3)).toEqual("fizz")
})

it("should be buzz if the numer is multiple of 5", function() {
  expect(fizzBuzz.play(5)).toEqual("buzz")
})

it("should be fizzbuzz if the numer is multiple of 5 and 3", function() {
  expect(fizzBuzz.play(15)).toEqual("fizzbuzz")
})

it("should return the number if not fizz, buzz or fizzbuzz", function() {
  expect(fizzBuzz.play(17)).toEqual(17)
})

it("should return 0 if number is 0", function() {
  expect(fizzBuzz.play(0)).toEqual(0)
})

it("should complain when passed a negative number", function() {
  expect(fizzBuzz.play(-1)).toEqual("Please choose a positive number")
})
})
