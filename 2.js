
var i = 0,
  j = 0;
// Желаемое количество строк
var max = 5;
var star = "";

while (i < max) {
  star = "";
  for (j = 0; j < max - i; j++);
  for (j = 0; j < 1 * i + 1; j++) star += "*";
  console.log(star);
  i++;
}


