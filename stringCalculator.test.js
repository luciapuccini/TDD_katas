/**
 * String Calculator
 * Create a simple String calculator with a method int Add(string numbers)
 *  1)The method can take 0, 1 or 2 numbers, and will return their sum (for an empty string it will return 0) for example “” or “1” or “1,2”
 * Start with the simplest test case of an empty string and move to 1 and two numbers
 * 2)Allow the Add method to handle an unknown amount of numbers
 * 3)Allow the Add method to handle new lines between numbers (“1\n2,3”).
 * 4)Support different delimiters “//[delimiter]\n[numbers…]” for example “//;\n1;2” 
 * 5)Calling Add with a negative number will throw an exception “negatives not allowed” - and the negative that was passed.if there are multiple negatives, show all of them in the exception message
 * 
 * 6)Numbers bigger than 1000 should be ignored, so adding 2 + 1001  = 2
 * 7)Delimiters can be of any length with the following format:  “//[delimiter]\n” for example: “//[***]\n1***2***3” should return 6
 *  8)Allow multiple delimiters like this:  “//[delim1][delim2]\n” for example “//[*][%]\n1*2%3” should return 6.
 *  make sure you can also handle multiple delimiters with length longer than one char
 **/
//arrange
const SC = require("./stringCalculator")

test("Empty string", () => {
    //act 
    respuesta = SC.add("")
    //assert
    expect(respuesta).toBe(0)
});

test("one number", () => {
    //arrange
    //act 
    //assert
    expect(SC.add("1")).toBe(1)
});
test("2 numbers", () => {
    expect(SC.add("1,2")).toBe(3)
});