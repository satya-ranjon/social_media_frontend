const passwordValidator = (value) =>
  !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/i.test(value);

export default passwordValidator;
