module.exports = ({ content }) => {
  return `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Shop</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
        <link href="/css/main.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"></link>
      </head>

      <body class="admin">
        <header>
          <nav class="navbar-admin">
            
              
                <a style="color:inherit; text-decoration:none" href="/admin/products">
                  <h1 class="adminTitle">Admin Panel</h1>
                </a>
                <div class="nav-admin-selection" >
                  <div class="navAdmProductsBtn" ><a style="color:inherit; text-decoration:none" href="/">Products</a></div>
                  <div class="navAdmSignoutBtn" ><a style="color:inherit; text-decoration:none" href="/signout">Sign Out</a></div>
                </div>
           
           
          </nav>
        </header>
        <div class="container">
          ${content}
        </div>
      </body>
    </html>
  `;
};
