function validation(str) {
  const brackets = "(){}[]";
  let bracketsSet = [];
  for (let i = 0; i < str.length; ++i) {
    let char = str[i],
      index = brackets.indexOf(char);
    if (index >= 0) {
      if (index & 1) {
        if (!bracketsSet.length) {
          return false;
        }
        let lastBracket = bracketsSet.pop();
        if (lastBracket != brackets[index - 1]) {
          return false;
        }
      } else {
        bracketsSet.push(char);
      }
    }
  }
  return true;
}
