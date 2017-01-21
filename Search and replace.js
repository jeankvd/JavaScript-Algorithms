
function myReplace(str, before, after) {
  str = str.split(" ");
  for (var i = 0; i < str.length; i++){
    
    if (str[i] == before) {
      if (str[i][0] === str[i][0].toUpperCase()){
        after = after.split("");
        after[0] = after[0].toUpperCase();
        after = after.join("");
      }
      str[i] = after;
    }
  }
  str = str.join(" ");
  return str;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
