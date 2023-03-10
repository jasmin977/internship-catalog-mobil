export function emailValidator(email) {
  if (!email) return "Email can't be empty.";
  else if (!verifyEmailFormat(email))
    return "Ooops! We need a valid institute email address.";

  return null;
}

export function verifyEmailFormat(email) {
  const reg = new RegExp(/[a-z]+@issatso\.u-sousse\.tn/);
  console.log(reg.test(email), email);
  return reg.test(email);
}
