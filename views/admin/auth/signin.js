const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ errors }) => {
  return layout({
    content: `
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-one-half signIn">
            <form method="POST">
              <h1 class="title">Sign in</h1>
              <div class="field">
                <label class="label">Email</label>
                <input class="input" autocomplete="off" required minlength="6" maxlength="30" placeholder="Email" name="email" type="email" />
                <p class="help is-danger">${getError(errors, 'email')}</p>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <input class="input" autocomplete="off" required minlength="6" maxlength="30" placeholder="Password" name="password" type="password" />
                <p class="help is-danger">${getError(errors, 'password')}</p>
              </div>
              <button style="border-radius:40px; color: white; font-family:'Archivo Black', sans-serif;" class="button is-black">Submit</button>
            </form>
            <a style="font-family:'Archivo Black', sans-serif;" href="/signup">Need an account? Sign Up</a>
          </div>
          <div class="column is-one-half signInImg" ></div>
        </div>
      </div>
    `
  });
};
