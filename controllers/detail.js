
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('productid');
    console.log('params',myParam)
    
    //call api load lên giao diện


function getDetail(){
    let promise = axios ({
        url:'https://shop.cyberlearn.vn/api/Product/getbyid?id=' + myParam,
        method:'GET',
    });

    promise.then(function(result){
        console.log(result.data)

        renderDetail(result.data.content,'container');
    })
}
function renderDetail(arrPr, idBody){
    let html=`
        <div class="img-shoes">
            <img src="${arrPr.image}"alt="" />
        </div>
        <div class="title">
            <h1>${arrPr.name}</h1>
            <p>${arrPr.description}</p>
            <h3>Avaible sizze</h3>
            <p id= "BtnSizeGiay"></p>
            <span>${arrPr.price}$</span>
            <div class="info">
                <button>+</button>
                <p>1</p>
                <button>-</button>
            </div>
            <a href="#">Add to card</a>
        </div>`
    document.getElementById(idBody).innerHTML = html;

    console.log(arrPr.size);
    let htmlSizeGiay = '';
        for(let index = 0; index < arrPr.size.length; index ++){
            // <button class="btn btn-dark text-white"></button>
            htmlSizeGiay += `
            <button class=" text-dark">${arrPr.size[index]}</button>
            `
        }

    document.getElementById('BtnSizeGiay').innerHTML = htmlSizeGiay;
}
function getProduct(){
    let promise = axios ({
        url:'https://shop.cyberlearn.vn/api/Product',
        method:'GET',
    });

    promise.then(function(result){
        console.log(result.data)

        renderProduct(result.data.content,'tblProduct');
        renderCarousel(result.data.content,'carousel-indicators','carousel-inner');
    })
}
window.onload = function (){
    getDetail();
}




