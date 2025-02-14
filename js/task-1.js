function logItems(array) {
  for (let index = 0; index < array.length; index++) {
    console.log(`№${index + 1} - ${array[index]}`);
  }
  console.log("");
}

const styles = ["jazz", "blues"];
logItems(styles);
styles.push("rock-n-roll");
logItems(styles);

if (styles.includes("blues")) {
  styles[styles.indexOf("blues")] = "classic";
}

logItems(styles);
