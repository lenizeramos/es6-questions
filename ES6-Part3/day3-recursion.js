//Print only items (emojis) in the console. Not the arrays.
let count = 0;
function printItems(array) {
  count++;
  console.log(count);
  for (const element of array) {
    if (Array.isArray(element)) {
      printItems(element);
    } else {
      console.log(element);
    }
  }
}

const array = ["😎", "💩", "🤗", "😼", "😂"];
//printItems(array);

const array2 = ["😎", ["💩", "🤗"], "😼", "😂"];
//printItems(array2);

const array3 = [
  "😎",
  [
    ["💩", ["🤗"]],
    [[["😼"]], "😂"],
  ],
];
printItems(array3);
