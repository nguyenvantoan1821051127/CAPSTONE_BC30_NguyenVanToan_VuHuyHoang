function getProduct(){
    let promise = axios ({
        url:'https://shop.cyberlearn.vn/api/Product',
        method:'GET',
    });

    promise.then(function(result){
        console.log(result.data.content)

        renderProduct(result.data.content,'tblProduct');
    })
}
function renderProduct(arrPr,idBody){
    let htmlConect;
    for(let index=0; index<arrPr.length; index++){
        let product=arrPr[index];
        htmlConect+=`
        <div class="col-4">
            <div class="item">
                <img src="${product.image}" alt="...">
                <div class="info">
                    <h3>${product.alias}</h3>
                    <p>${product.shortDescription}</p>
                </div>
                <div class="content">
                    <a href="./detail.html?productid=${product.id}" class="btn-buyNow">Buy now</a>
                    <span class="btn-gia">${product.price}$</span>
                </div>
            </div>
        </div>`
    }
    document.getElementById(idBody).innerHTML = htmlConect;
}

window.onload =function(){
    getProduct();
}