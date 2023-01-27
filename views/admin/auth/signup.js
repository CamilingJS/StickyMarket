const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ req, errors }) => {
  console.log(errors);
  return layout({
    content: `
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-one-quarter">
            <form method="POST">
              <h1 class="title">Sign Up</h1>
              <div class="field">
                <label class="label">Email</label>
                <input class="input" autocomplete="off" required minlength="6" maxlength="30" placeholder="Email" name="email" type="email"/>
                <p class="help is-danger">${getError(errors, 'email')}</p>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <input class="input" autocomplete="off" required minlength="6" maxlength="30" placeholder="Password" name="password" type="password" />
                <p class="help is-danger">${getError(errors, 'password')}</p>
              </div>
              <div class="field">
                <label class="label">Password Confirmation</label>
                <input class="input" autocomplete="off" required minlength="6" maxlength="30" placeholder="Confirm Password" name="passwordConfirmation" type="password"  />
                <p class="help is-danger">${getError(
                  errors,
                  'passwordConfirmation'
                )}</p>
              </div>
              <button style="border-radius:40px; color: white; font-family:'Archivo Black', sans-serif;" class="button is-black">Submit</button>
            </form>
            <a style="font-family:'Archivo Black', sans-serif;"  href="/signin">Have an account? Sign In</a>
          </div>
        </div>
      </div>
    `
  });
};
