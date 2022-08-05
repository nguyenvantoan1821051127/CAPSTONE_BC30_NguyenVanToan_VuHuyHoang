function getProduct(){
    let pronise=axios({
        url:'https://shop.cyberlearn.vn/api/Product',
        method:'GET',
    });
    //thanh cong
    pronise.then(function(result){
        console.log(result.data);
        //goi ham rendartable sau khi lay du lieu tu api ve
        renderProduct(result.data.content,'tblProduct');
    })
}
function renderProduct(arrPr,idBody){
    let htmlConect;
    for(let index=0; index<arrPr.length; index++){
        let product=arrPr[index];
        htmlConect+=`
        <div class="rendertable-item">
            <div class="rendertable-item-inner"">
                <div class="rendertable-item-inner-top">
                    <img src="${product.image}" alt="...">
                </div>
                <div class="rendertable-item-inner-mid">
                    <p>${product.alias}</p>
                    <p><span>${product.shortDescription}</span></p>
                </div>
                <div class="rendertable-item-inner-bottom">
                    <a href="./detail.html?productid=${product.id}" class="btn-buyNow">Buy now</a>
                    <span class="btn-gia">${product.price}$</span>
                </div>
            </div>
        </div>`
    }
    document.getElementById(idBody).innerHTML = htmlContent;
}

window.onload =function(){
    getProduct();
}