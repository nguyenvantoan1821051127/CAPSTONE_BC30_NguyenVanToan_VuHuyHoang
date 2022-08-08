function getProduct(){
    let promise = axios ({
        url:'https://shop.cyberlearn.vn/api/Product',
        method:'GET',
    });

    promise.then(function(result){
        console.log(result.data)

        renderProduct(result.data.content,'tblProduct');
        renderCarousel(result.data.content,'carousel-indicators','carousel-inner')
    })
}
function renderProduct(arrPr,idBody){
    let htmlConect='';
    for(let index in arrPr){
        let product=arrPr[index];
        htmlConect+=`
        <div class="col-4">
            <div class="item">
                <img src="${product.image}" alt="...">
                <div class="info">
                    <h3>${product.name}</h3>
                    <p>${product.shortDescription}</p>
                </div>
                <div class="content">
                    <button><a href="./detail.html?productid=${product.id}">Buy now</a></button>
                    <p >${product.price}$</p>
                </div>
            </div>
        </div>`
    }
    document.getElementById(idBody).innerHTML = htmlConect;
}
function renderCarousel(arrPr,idBodycarousel,ibodyindicators){
    let htmlCarousel='';
    let htmlIndicator='';
    for(let index in arrPr){
        let product=arrPr[index];
        if(product === arrPr[0]){
            htmlCarousel+=`
                <div class="carousel-item active" data-bs-interval="10000">
                    <div class="row">
                        <div class="col">
                            <div class="item">
                                <img src="${product.image}" alt="" />
                            </div>
                        </div>
                        <div class="col" style="margin-left: 145px">
                            <div class="item">
                                <h1>${product.name}</h1>
                                <p>${product.shortDescription}</p>
                                <button><a href="./detail.html?productid=${product.id}">Buy now</a></button>
                            </div>
                        </div>
                    </div>
                </div>`

            htmlIndicator+=`<button type="button"data-bs-target="#carouselExampleDark"data-bs-slide-to="0"class="active"aria-current="true"aria-label="Slide 1"></button>`
            }
        else{
            htmlCarousel+=`
                <div class="carousel-item " data-bs-interval="10000">
                    <div class="row">
                        <div class="col">
                            <div class="item">
                                <img src=${product.image} alt="" />
                            </div>
                        </div>
                        <div class="col" style="margin-left: 145px">
                            <div class="item">
                                <h1>${product.name}</h1>
                                <p>${product.shortDescription}</p>
                                <button><a href="./detail.html?productid=${product.id}">Buy now</a></button>
                            </div>
                        </div>
                    </div>
                </div>`

                htmlIndicator+=`<button type="button"data-bs-target="#carouselExampleDark"data-bs-slide-to="${index}" aria-current="true"aria-label=Slide ${index+1}></button>`
        }
    }
    document.getElementById(idBodycarousel).innerHTML =  htmlIndicator;
    document.getElementById(ibodyindicators).innerHTML = htmlCarousel;

}
window.onload =function(){
    getProduct();
}