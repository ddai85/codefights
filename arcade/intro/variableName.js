function variableName(name) {
  let firstRegex = /[0-9]/;
  if (firstRegex.test(name.charAt(0))) {
    let fullRegex = /^\w+$/;
    return fullRegex.test(name);
  }
  return false;
}