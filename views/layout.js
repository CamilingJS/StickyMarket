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
            <div class="container navbar-container">
              <div>
                <ul class="social">
                  <li>
                    <a href="tel:+16504981818"><i class="fa fa-phone"></i> +1 650 498 1818</a>
                  </li>
                  <li>
                    <a href="mailto:info@stickymarket.com"><i class="fa fa-envelope"></i> info@stickymarket.com</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul class="social">
                  <li><a href="https://www.instagram.com/jaycamdev/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                  <li><a href="https://twitter.com/JayCamDev" target="_blank"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/jonathancamiling/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
          </nav>
          <nav class="navbar navbar-bottom">
            <div class="container navbar-container">
              <div>
                <a href="/">
                  <div title="Sticky Market Logo" class="logo" ></div>
                </a>
              </div>
              <div class="navbar-item">
                <div class="navbar-buttons">
                  <div class="navbar-item">
                    <a href="/"><i class="fa fa-bookmark"></i> PRODUCTS</a>
                  </div>
                  <div class="navbar-item">
                    <a href="/cart"><i class="fa fa-shopping-cart"></i> CART</a>
                  </div>
                  <div class="navbar-item">
                    <a href="/signin"><i class="fa fa-toolbox"></i> ADMIN ACCESS</a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        ${content}

        <footer style="background-color:black, height:300px, width: 100%"  class="mainFooter >
          <h1>FOOTER</h1>
        </footer>

      </body>
    </html>
  `;
};
