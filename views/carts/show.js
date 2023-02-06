const layout = require('../layout');

module.exports = ({ items }) => {
    const totalPrice = items.reduce((prev, item)=>{
        return prev + item.quantity * item.product.price
    }, 0);

  const renderedItems = items
    .map(item => {
      return `
        <div class="cart-item message">
        <div class="remove">
        <form method="POST" action="/cart/products/delete" >
          <input hidden value="${item.id}" name="itemId" />
          <button class="button is-dark">                  
            <span class="icon is-small">
              <i class="fas fa-times"></i>
            </span>
          </button>
        </form>
      </div>
          <h3 class="itemTitle">${item.product.title}</h3>
          <div class="cart-right">
            <div class="priceQty" >
              $${item.product.price}  X  ${item.quantity} = 
            </div>
            <div class="itemSubTotal is-size-4">
              $${item.product.price * item.quantity}
            </div>
            
          </div>
        </div>
      `;
    })
    .join('');

  return layout({
    content: `
      <div id="cart" class="container">
        <div class="columns">
          <div class="column"></div>
          <div class="column is-four-fifths">
            <h3 class="cartTitle"><b>Shopping Cart</b></h3>
            <div>
              ${renderedItems}
            </div>
            <div>
            <div class="total">
            <div>Total</div>
            <h1 >$${totalPrice}</h1>
            </div>
            <div class="buy-btn-container">
              <button><a style="color:inherit; text-decoration:none"  href="/">Continue Shopping</a></button>
              <button>Buy</button>
            </div>
            </div>
          </div>
          <div class="column"></div>
        </div>
      </div>
    `
  });
};
