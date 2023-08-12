//Q4. Write a program to print the first non-repeated character from a string?

// JavaScript implementation

function FirstNonRepeat(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s.charAt(i), s.indexOf(s.charAt(i)) + 1) == -1) {
      console.log(s[i]);

      break;
    }
  }
  return;
}

// driver code
let s = "Algorithms";

FirstNonRepeat(s);
