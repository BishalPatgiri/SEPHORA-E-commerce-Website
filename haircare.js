



document.getElementById("btn").addEventListener("click",subFun);
 var makeupPageData = [
{img:"https://cdn09.nnnow.com/web-images/medium/styles/NAG35MWAZB5/1603956012732/1.jpg",offer:"Offer",name:"OLAPLEX",para:"N°4 Bond Maintenance Shampoo",price2:"2950",para2:"2 more offers"},
{img:"https://cdn00.nnnow.com/web-images/medium/styles/RB2GD0T4W14/1603859985717/1.jpg",offer:"Offer",name:"OLAPLEX",para:"N°4 Bond Maintenance Conditioner",price2:"1550",para2:"2 more offers"},
{img:"https://cdn02.nnnow.com/web-images/medium/styles/WVOOED5AWF4/1634886167207/1.jpg",offer:"Offer",name:"MOROCCANOIL",para:"Extra Volume Shampoo",price2:"2160",discount:"(10% Off)",para2:"2 more offers"},
{img:"https://cdn03.nnnow.com/web-images/medium/styles/RA54LTCGGYE/1586865417841/1.jpg",offer:"Offer",name:"AVEDA",para:"Be Curly™ Curl Enhancer",price1:"Rs.980",price2:"750",discount:"(20% Off)",para2:"2 more offers"},
{img:"https://cdn14.nnnow.com/web-images/medium/styles/ZXCZQG4LPA2/1586865417849/1.jpg",offer:"Offer",name:"AVEDA",para:"Cherry Almond Softening Shampoo",price1:"1300",price2:"2000",discount:"(20% Off)",para2:"2 more offers"},
{img:"https://cdn10.nnnow.com/web-images/medium/styles/B428LT1Z7YB/1580451959400/1.jpg",offer:"Offer",name:"AVEDA",para:"Nutriplenish™ Leave-In-Conditioner",price1:"2850",price2:"3000",discount:"(40% Off)",para2:"2 more offers"},
{img:"https://cdn06.nnnow.com/web-images/medium/styles/H18EA2SCEQD/1634887143536/1.jpg",offer:"Offer",name:"MOROCCANOI",para:"Luminous Hairspray Medium",price1:"2160",price2:"2160",discount:"(30% Off)",para2:"2 more offers"},
{img:"https://cdn19.nnnow.com/web-images/medium/styles/SNX3WCF7MD8/1634886962080/1.jpg",offer:"Offer",name:"MOROCCANOI",para:"Luminous Hairspray Extra Strong",price1:"2160",price2:"2160",discount:"(20% Off)",para2:"2 more offers"},
{img:"https://cdn16.nnnow.com/web-images/medium/styles/WAI3ZKSEJLG/1634886167158/1.jpg",offer:"Offer",name:"MOROCCANOI",para:"Dry Shampoo Dark Tones Hair Spray",price1:"2160",price2:"2160",discount:"(20% Off)",para2:"2 more offers"},
{img:"https://cdn09.nnnow.com/web-images/medium/styles/NAG35MWAZB5/1603956012732/1.jpg",offer:"Offer",name:"OLAPLEX",para:"N°4 Bond Maintenance Shampoo",price1:"2950",price2:"2950",discount:"(20% Off)",para2:"2 more offers"},
{img:"https://cdn00.nnnow.com/web-images/medium/styles/RB2GD0T4W14/1603859985717/1.jpg",offer:"Offer",name:"OLAPLEX",para:"N°4 Bond Maintenance Conditioner",price1:"1550",price2:"2950",discount:"(40% Off)",para2:"2 more offers"},
{img:"https://cdn02.nnnow.com/web-images/medium/styles/WVOOED5AWF4/1634886167207/1.jpg",offer:"Offer",name:"MOROCCANOI",para:"Extra Volume Shampoo",price1:"900",price2:"2160",discount:"(20% Off)",para2:"2 more offers"}]


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


