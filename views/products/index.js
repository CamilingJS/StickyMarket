const layout = require('../layout');

module.exports = ({ products }) => {
  const renderedProducts = products
    .map(product => {
      return `
        <div class="column is-one-third">
          <div class="card product-card">
            <figure>
              <img src="data:image/png;base64, ${product.image}"/>
            </figure>
            <div class="card-content">
              <div style="display:flex; align-items:stretch, justify-content: space-between" >
                <h5 class="subtitle" style="max-width: 16ch" >${product.title}</h5>
                <h5 class="subtitle" style="margin-left: 8px; min-width:3ch" > <b> $${product.price}</b></h5>
              </div>
              <p>${product.description}</p>
              
            </div>
            <footer class="card-footer">
              <form action="/cart/products" method="POST">
                <input hidden value="${product.id}" name="productId" />
                <button class="button has-icon is-inverted">
                  <i class="fa fa-shopping-cart"></i> Add to cart
                </button>
              </form>
            </footer>
          </div>
        </div>
      `;
    })
    .join('\n');

  return layout({
    content: `
      <section class="banner">
        <div class="container">
          <div class="columns is-centered">
            <img src="/images/banner.jpg" />
          </div>
        </div>
      </section>
      
      <section>
        <div class="container">
          <div class="columns">
            <div class="column "></div>
            <div class="column is-four-fifths">
              <div>
                <h2 class="title text-center">Featured Items</h2>
                <div class="columns products">
                  ${renderedProducts}  
                </div>
              </div>
            </div>
            <div class="column "></div>
          </div>
        </div>
      </section>
    `
  });
};