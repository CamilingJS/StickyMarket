const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({}) => {
  return layout({
    content: `
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-one-quarter">
            <div style="display:flex; flex-direction:column; justify-content:center;" class="signOutPageOptions" >
                <h1 style="text-align:center; font-family:'Archivo Black', sans-serif;"  class="title" style="min-length:16ch; margin:16px 0;">Thanks for visiting!</h1>
                <a href="/">
                <button style="width: 240px; height: 60px; margin: 8px; padding: 8px; border-radius:40px; color: black; font-family:'Archivo Black', sans-serif;" class="button is-warning is-active">Continue Shopping</button>
                </a>
                <a href="/signin">
                <button style="width: 240px; height: 60px; margin: 8px; padding: 8px; border-radius:40px; color: white; font-family:'Archivo Black', sans-serif" class="button is-black">Return to Admin</button>
                </a> 
            </div>
            <a style="text-align:center; font-family:'Archivo Black', sans-serif;" href="/signup">Need an account? Sign Up</a>
          </div>
        </div>
      </div>
    `
  });
};
