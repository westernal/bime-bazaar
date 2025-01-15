const isPhoneNumberValid = (phoneNumber: string) => {
  // Regex to match Persian phone numbers starting with 09 or 9, followed by 9 digits
  const persianPhoneRegex = /^9\d{9}$|^09\d{9}$/;
  return persianPhoneRegex.test(phoneNumber);
};

export default isPhoneNumberValid;
