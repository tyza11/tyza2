function renderPackages(game, packages, options = {}) {
  const box = document.getElementById('packages');
  if (!box) return;
  box.innerHTML = packages.map((pkg) => `
    <article class="game-card package-card">
      <div class="game-art package-art">
        ${pkg.image ? `<img src="${pkg.image}" alt="${pkg.name}" class="package-image">` : `<div class="art-title">💎</div>`}
      </div>
      <div class="game-info">
        <div>
          <h3>${pkg.name}</h3>
          <p class="package-price">Rs. <strong>${Number(pkg.price).toLocaleString()}</strong></p>
        </div>
        <button class="btn small" onclick="checkout('${game}', '${pkg.name.replace(/'/g, "\\'")}', ${pkg.price})">Order Now ↗</button>
      </div>
    </article>`).join('');
}

function checkout(game, packageName, price) {
  const id = prompt('Enter your Player ID:');
  if (!id) return;
  const phone = '94701014203';
  const msg = `Hello TYZA DIAMOND STORE!\nGame: ${game}\nPackage: ${packageName}\nPrice: Rs. ${price}\nPlayer ID: ${id}\nI want to place this order.`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
}
