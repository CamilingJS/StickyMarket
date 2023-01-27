const layout = require('../layout');

module.exports = ({ products }) => {
  const renderedProducts = products
    .map(product => {
      return `
      <tr>
        <td style="font-family:'Archivo Black', sans-serif" >${product.title}</td>
        <td>${product.description}</td>
        <td style="font-family:'Archivo Black', sans-serif">$${product.price}.00</td>
        <td class="editBtn">
          <a href="/admin/products/${product.id}/edit">
            <button style="border-radius:40px; color: white; font-family:'Archivo Black', sans-serif;" class="button is-link">
              Edit
            </button>
          </a>
        </td>
        <td>
          <form method="POST" action="/admin/products/${product.id}/delete">
            <button style="border-radius:40px; color: white; font-family:'Archivo Black', sans-serif;" class="button is-danger">Delete</button>
          </form>
        </td>
      </tr>
    `;
    })
    .join('');

  return layout({
    content: `
      <div class="control prodTitle">
        <h1 style="font-family:'Archivo Black'" class="subtitle">Products</h1>  
        <a style="border-radius:40px; color: white; font-family:'Archivo Black', sans-serif;" href="/admin/products/new" class="button is-primary">New Product</a>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          ${renderedProducts}
        </tbody>
      </table>
    `
  });
};
