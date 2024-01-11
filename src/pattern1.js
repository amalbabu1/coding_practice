function printPattern(n) {
  pattern = "";
  for (let i = 0; i < n; i++) {
    for (let i = 0; i < n; i++) {
      pattern = pattern + "*";
    }
    if (i == n - 1) return pattern;
    pattern = pattern + "\n";
  }
  // return pattern;
}

module.exports = printPattern;
