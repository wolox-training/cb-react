export const passMinLength = pass => (pass && pass.length < 8 ? 'The password is too short' : undefined);
export const passMaxLength = pass => (pass && pass.length > 52 ? 'The password is too long' : undefined);
export const required = value => (value ? undefined : 'Both fields are required');
export const noNumber = value =>
  /[^a-z|A-Z]/.test(value) ? 'El campo no puede contener números' : undefined;
export const noNumberOrLetter = value =>
  !/(?=.*[a-z|A-Z])(?=.*\d)/.test(value)
    ? 'La password debe contener al menos un número y una letra'
    : undefined;
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
