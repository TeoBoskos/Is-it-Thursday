setTimeout (() => {
  document.head.innerHTML = `
  <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Roboto+Slab:wght@400;700&family=Roboto:wght@400;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles/Z-MONEY.CSS">
    `
  document.body.innerHTML = `
    <div class="main">
      <h1 class="title">IT'S THURSDAY</h1>
      <input class="checkbox" type="checkbox"><p class="money-plus">+25€</p>
      <p class="pVariable"></p>
    </div>
    <script src="scripts/Z-MONEY.JS"></script>
`
  document.title = 'Είναι Πέμπτη;'
  setTimeout (() => {
    
  }, 86400000)
}, 	604800000)