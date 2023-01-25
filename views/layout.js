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
                  <div class="navbar-selection" >
                    <a href="/cart">CART</a>
                    <a href="/">PRODUCTS</a>
                    <a href="/signin">ADMIN ACCESS</a>
                  </div>     
          </nav>
          
        </header>

        ${content}

        <footer style="background-color:black, height:300px, width: 100%"  class="mainFooter >
          <h1>FOOTER</h1>
          <ul class="navbar-list">
                  <li><a href="https://www.instagram.com/jaycamdev/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                  <li><a href="https://twitter.com/JayCamDev" target="_blank"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/jonathancamiling/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                </ul>
        </footer>

      </body>
    </html>
  `;
};
