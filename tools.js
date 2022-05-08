





document.getElementById("btn").addEventListener("click",subFun);
var makeupPageData = [
{img:"https://cdn17.nnnow.com/web-images/medium/styles/DQ4XG8LX9KO/1533194318318/1.jpg",offer:"Offer",name:"SEPHORA COLLECTION",para:"Solid Brush Cleaner",price2:"1250",para2:"2 more offers"},
{img:"https://cdn13.nnnow.com/web-images/medium/styles/WISXKMTSCKV/1533194318322/1.jpg",offer:"Offer",name:"SEPHORA COLLECTION",para:"Retractable Complexion Brush",price2:"1900",para2:"2 more offers"},
{img:"https://cdn05.nnnow.com/web-images/medium/styles/UPN1DIYDEOO/1539585373094/1.jpg",offer:"Offer",name:"SEPHORA COLLECTION",para:"Advanced Brush Set",price2:"6350",discount:"(10% Off)",para2:"2 more offers"},
{img:"https://cdn11.nnnow.com/web-images/medium/styles/V3WGKJS6KW8/1583391560342/1.jpg",offer:"Offer",name:"SEPHORA COLLECTION",para:"Multi-Texture Sponge",price1:"Rs.500",price2:"500",discount:"(20% Off)",para2:"2 more offers"},
{img:"https://cdn06.nnnow.com/web-images/medium/styles/4TA594MACAP/1585728189786/1.jpg",offer:"Offer",name:"SEPHORA COLLECTION",para:"Eyelash Curler",price1:"1770",price2:"1780",discount:"(20% Off)",para2:"2 more offers"},
{img:"https://cdn05.nnnow.com/web-images/medium/styles/SFJGB37DTO2/1560852958803/1.jpg",offer:"Offer",name:"SEPHORA COLLECTION",para:"Pro Foundation Brush #47",price1:"2500",price2:"2500",discount:"(40% Off)",para2:"2 more offers"},
{img:"https://cdn15.nnnow.com/web-images/medium/styles/366XPCD0TVA/1560852958825/1.jpg",offer:"Offer",name:"SEPHORA COLLECTION",para:"Classic Blush Brush #04",price1:"1200",price2:"1200",discount:"(30% Off)",para2:"2 more offers"},
{img:"https://cdn04.nnnow.com/web-images/medium/styles/LNOKEUIHEQC/1583391560346/1.jpg",offer:"Offer",name:"SEPHORA COLLECTION",para:"Face Konjac Sponge",price1:"980",price2:"980",discount:"(20% Off)",para2:"2 more offers"},
{img:"https://cdn04.nnnow.com/web-images/medium/styles/F96TP8TMHOO/1583391560382/1.jpg",offer:"Offer",name:"SEPHORA COLLECTION",para:"Silicone Makeup Sponge",price1:"980",price2:"980",discount:"(20% Off)",para2:"2 more offers"},
{img:"https://cdn10.nnnow.com/web-images/medium/styles/RU1UWVX0TTA/1636383743531/1.jpg",offer:"Offer",name:"FOREO",para:"Luna 3 for Combination Skin",price1:"18900",price2:"18900",discount:"(20% Off)",para2:"2 more offers"},
{img:"https://cdn02.nnnow.com/web-images/medium/styles/PZCTSX56JWC/1636455738001/1.jpg",offer:"Offer",name:"FOREO",para:"IRIS Eye Massager - Magenta",price1:"12900",price2:"12900",discount:"(40% Off)",para2:"2 more offers"},
{img:"https://cdn16.nnnow.com/web-images/medium/styles/1XXYANS1HCO/1580451959408/1.jpg",offer:"Offer",name:"FOREO",para:"Luna Mini 3",price1:"16000",price2:"16000",discount:"(20% Off)",para2:"2 more offers"}]


displayFun(makeupPageData);
var cartArr = [];
function displayFun(data){
   data.forEach(function(el){
       var box = document.createElement("div");
       var Imag = document.createElement("img");
       Imag.src = el.img;
       var Offer = document.createElement("h3");
       Offer.innerText = el.offer;
       var Name = document.createElement("h4");
       Name.innerText = el.name;
       var Par = document.createElement("p");
       Par.innerText = el.para;
       var Price = document.createElement("h4");
       Price.innerText = el.price2;
       var moreOffers = document.createElement("p");
       moreOffers.innerText = el.para2;
       var cart = document.createElement("h5");
       cart.innerText = "ADD TO CART";
       cart.addEventListener("click",function(){
           addCart(el);
       })
       box.append(Imag,Name,Par,Price,moreOffers,cart);
       document.querySelector("#Products").append(box);
   })
}

function addCart(el){
   cartArr.push(el);
   localStorage.setItem("cartData",JSON.stringify(cartArr));
   alert("Product Added to Cart")
}

function subFun(){
   event.preventDefault();
   alert("Subscribe Successfully")
   window.location.reload();
}


