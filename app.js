function isEven (n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function startUp (n) {
  return isEven(n);
}

module.exports = {
  startUp
};
