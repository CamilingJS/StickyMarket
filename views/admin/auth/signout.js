const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({}) => {
  return layout({
    content: `
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-one-quarter">
            <div style="display:flex; flex-direction:column; justify-content:center; ">
                <h1 class="title" style="min-length:16ch; margin:16px 0;">Thanks for visiting!</h1>
                <a href="/">
                <button class="button is-primary" style="margin:8px 0; padding:4px">Continue Shopping</button>
                </a>
                <a href="/signin">
                <button class="button is-dark" style="min-length:16ch; margin:8px 0;">Return to Admin</button>
                </a> 
            </div>
            <a href="/signup">Need an account? Sign Up</a>
          </div>
        </div>
      </div>
    `
  });
};
