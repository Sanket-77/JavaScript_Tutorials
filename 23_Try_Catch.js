// Try-catch => statement is used to handle exceptions, which are runtime errors that can occur during the execution of a program. The try block contains the code that might generate an exception, and the catch block handles the exception if one occurs.

try {
  alert("Start of try runs");

  lalala;

  alert("End of try ");
} catch (error) {
  console.log("error name: ", error.name);
  console.log("error message: ", error.message);
  console.log("error message: ", error.stack);
  alert(`Error has occurred!`);
}

// /////////////////////////////

try {
  let age = prompt("Enter your age");
  age = Number.parseInt(age);
  if (age > 150) {
    throw ReferenceError("This is probabaly not true");
  }
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}
console.log("Script os still running");

//  /// Finally => finally always run with or without error
// use finally for cleanup

// Close the file
// Exit the loop
// Write to the log file

