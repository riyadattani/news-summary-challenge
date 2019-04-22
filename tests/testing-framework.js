var assert = {
  isTrue: function(desc = "DESCRIPTION", assertionToCheck) {
    if (!assertionToCheck) {
      console.log("%c " + desc + ": Assertion failed - " + assertionToCheck, 'color: red');
    } else {
      console.log("%c " + desc + ": Assertion passed", 'color: green');
    }
  }
}
