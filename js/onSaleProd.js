fetch ('js/items.json')
    .then(response => response.json())
    .then(data => {
        const items_sale = document.getElementById("items-sale");
        const otherProductSwiper = document.getElementById("other-product-swiper");
        const otherProductSwiper2 = document.getElementById("other-product-swiper2");

        allProductsJson = data;
        data.forEach(product => {
            if(product.old_price){ 
                const discPercentage = Math.floor((product.old_price - product.price) / product.old_price * 100);
                items_sale.innerHTML += `
                <div class="product swiper-slide">
                <div class="icons">
                    <span><i  onclick="addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                    <span><i class="fa-solid fa-heart"></i></span>
                    <span><i class="fa-solid fa-share"></i></span>
                </div>
                <span class="sale-percent">%${discPercentage}</span>
                <div class="img-product">
                    <img src="${product.img}" alt="">
                    <img class="img-hover" src="${product.img_hover}" alt="">
                </div>
                <h3 class="name-product"><a href="#">${product.name}</a></h3>
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <div class="price">
                    <p><span>$${product.price}</span></p>
                    <p class="odd-price">$${product.old_price}</p>
                </div>
            </div>`
            }
        });
        data.forEach(product => {
            if(product.old_price){ 
                otherProductSwiper.innerHTML += `
                <div class="product swiper-slide">
                <div class="icons">
                    <span><i  onclick="addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                    <span><i class="fa-solid fa-heart"></i></span>
                    <span><i class="fa-solid fa-share"></i></span>
                </div>
                <div class="img-product">
                    <img src="${product.img}" alt="">
                    <img class="img-hover" src="${product.img_hover}" alt="">
                </div>
                <h3 class="name-product"><a href="#">${product.name}</a></h3>
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <div class="price">
                    <p><span>$${product.price}</span></p>
                </div>
            </div>`
            }
        });
        data.forEach(product => {
            if(product.old_price){ 
                otherProductSwiper2.innerHTML += `
                <div class="product swiper-slide">
                <div class="icons">
                    <span><i  onclick="addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                    <span><i class="fa-solid fa-heart"></i></span>
                    <span><i class="fa-solid fa-share"></i></span>
                </div>
                <div class="img-product">
                    <img src="${product.img}" alt="">
                    <img class="img-hover" src="${product.img_hover}" alt="">
                </div>
                <h3 class="name-product"><a href="#">${product.name}</a></h3>
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <div class="price">
                    <p><span>$${product.price}</span></p>
                </div>
            </div>`
            }
        });
    })