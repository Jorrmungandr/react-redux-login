export default (email, password, callback) => {
  setTimeout(() => {
    if (email === 'a@a.a' && password === 'a') {
      return callback(null);
    } else {
      return callback(new Error('E-mail ou senha Inválida'));
    }
  }, 1000);
}