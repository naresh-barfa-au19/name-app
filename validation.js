function nameValidation(name) {
  let errMsg = "";
  if (name === "" || name === null) {
    errMsg = "Name is empty";
  }
  if (name.length < 4) {
    errMsg = "Name should be grater then 3 charactor";
  }
  if (name.search(/[^a-zA-Z ]+/) !== -1) {
    errMsg = "Only charactor allowed";
  }
  return errMsg;
}
module.exports = nameValidation;
