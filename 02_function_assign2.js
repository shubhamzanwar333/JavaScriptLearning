function bankDetails(bankName, accountNum, location, pinCode) {
  console.log(
    "My Bank details are as follows: ",
    "Bank Name: " + bankName,
    "...",
    "Ac No: " + accountNum,
    "...",
    "Branch: " + location,
    "...",
    "Pincode: " + pinCode
  );
}

bankDetails("CITI Bank", 3456782345, "Pune", 431202);
bankDetails("Axis Bank", 7856782345, "Mumbai", 441202);
bankDetails("HDFC Bank", 8956782345, "Pune", 631202, "Open");
