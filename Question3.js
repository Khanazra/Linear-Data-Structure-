// Q3. Write a program to check if two strings are a rotation of each other?

function check_rotation(s, goal) {
  if (s.length != goal.length) {
    return false;
  }

  let q1 = [];
  for (let i = 0; i < s.length; i++) q1.push(s[i]);

  let q2 = [];
  for (let i = 0; i < goal.length; i++) q2.push(goal[i]);

  let k = goal.length;
  while (k--) {
    let ch = q2[0];
    q2.shift();
    q2.push(ch);
    if (JSON.stringify(q2) == JSON.stringify(q1)) return true;
  }

  return false;
}

// driver code

let s1 = "ABCD";
let s2 = "CDAB";
if (check_rotation(s1, s2))
  console.log(s2, " is a rotated form of ", s1, "</br>");
else console.log(s2, " is not a rotated form of ", s1, "</br>");

let s3 = "ACBD";
if (check_rotation(s1, s3))
  console.log(s3, " is a rotated form of ", s1, "</br>");
else console.log(s3, " is not a rotated form of ", s1, "</br>");
