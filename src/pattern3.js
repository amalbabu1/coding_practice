module.exports = printPattern = (rows) => {
  let pattern = "";
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < i + 1; j++) {
      pattern = pattern + (j + 1).toString();
    }
    if (i == rows - 1) return pattern;
    pattern += "\n";
  }
};
