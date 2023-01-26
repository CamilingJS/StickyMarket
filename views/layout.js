module.exports = ({ content }) => {
  return `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sticky Market</title>
        <link rel="icon" type="image/x-icon" href="/images/StickyMarket-favicon.svg">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
        <link href="/css/main.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"></link>
      </head>
      <body>
        <header>
          <nav class="navbar navbar-top">
            <div class="logo-container" >
              <a href="/">
              <div title="Sticky Market Logo" class="logo-white" ></div>
              </a>
            </div>
            <ul class="navbar-selection" >
              <li><a href="/cart">CART</a></li>
              <li><a href="/">PRODUCTS</a></li>
              <li><a href="/signin">ADMIN ACCESS</a></li>
            </ul>       
          </nav>
          
        </header>
        ${content}
        <footer class="footer-main" >
          <ul class="footer-links" >
            <li><a href="/">Home</a></li>
            <li><a href="/signin">Admin Access</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="https://www.ayeyo.me/jonathancamiling" target="_blank">Contact</a></li>
          </ul>
          <h1>&copy Jonathan Camiling | All Rights Reserved | Powered By: <a href="https://jaycam.dev/" target="_blank" >JayCam.Dev</a></h1>
        </footer>
      </body>
    </html>
  `;
};