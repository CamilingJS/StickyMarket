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
              <li><a href="/signin">LOGIN</a></li>
            </ul>       
          </nav>
        </header>
        <section class="banner-main" >
          <div class="banner-left">
            <h4>EASY ONLINE ORDERING, LIGHTNING FAST TURNAROUND</h4>
            <h1>Get your Crypto Currency Stickers, Labels, Decals & More!</h1>
            <h5>Easily create & print custom crypto currency themed products for your business, brand, and beyond. Order in any size, die-cut shape, and quantity.</h5>
            <div class="banner-left-buttons">
            <button><a style="text-decoration:none; color: inherit" href="#popularpicks">Shop Now</a></button>
            <button><a style="text-decoration:none; color: inherit" href="/signin">Log In</a></button></div>
          </div>
          <div class="banner-right">
            <div title="Animation" aria-label="Animation" class="banner-right-img">
            </div>
          </div>
        </section>
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