
function first(){
    document.getElementById("slideImage").src="https://logan.nnnow.com/content/dam/nnnow-project/09-march-2022/Benefit_TopbannerDesktop(2).jpg";
}
function second(){
    document.getElementById("slideImage").src="https://logan.nnnow.com/content/dam/nnnow-project/31-mar-2022/se/SC_Topbanner_Newatsephoradesktop.jpg";
}
function third(){
    document.getElementById("slideImage").src="https://logan.nnnow.com/content/dam/nnnow-project/22-april-2022/ABH_TopBanner_ABHMattelipstickslaunchDESKTOP.gif";
}
function fourth(){
    document.getElementById("slideImage").src="https://logan.nnnow.com/content/dam/nnnow-project/13-april-2022/se/Sephora_TopBanner_Summer,Sunshine&SPFDesktop.jpg";
}
function fifth(){
    document.getElementById("slideImage").src="https://logan.nnnow.com/content/dam/nnnow-project/11-april-2022/SC_Homepage_Beautypowerforall_Desktop.jpg";
}
setInterval(first,3000);
setInterval(second,6000);
setInterval(third,9000);
setInterval(fourth,12000);
setInterval(fifth,15000);

// storing data for brand
var brandArr=["Sephora Collection","Benefit Cosmetics",
"Make Up For Ever","Cover FX","Stila","Natio","Burt Bees",
"Foreo","Smashbox","Glamglow","Clinique","Estee Lauder",
"Elizabeth Arden","Givenchy","Bobbi Brown","Shiseido","OPI",
"Forest Essentials","Percy & Reed","Boscia","Oscar Blandi",
"Burberry","CK Fragrances","Kenzo","Tom Ford","Bvlgari",
"Carolina Herrera","Davidoff","Giorgio Armani","Montblanc",
"Paco Rababne","Azzaro","Nina Ricci","Robert Cavilli","Zirh",
"Omorfee"];
brandArr.forEach(function(elem){
    var data=document.createElement("a");
    data.innerText=elem;
    document.querySelector("#footer_link_content_1").append(data)
})

var makeupArr=["Face","Cheek","Eye","Lip","Nail","Makeup Palettes","Accessories"];
makeupArr.forEach(function(elem){
    var data=document.createElement("a");
    data.innerText=elem;
    document.querySelector("#footer_link_content_2").append(data)
})

var skinCareArr=["Moisturizers","Cleansers","Treatments","Masks","Eye Care","Sun Care","Lip Treatments"];
skinCareArr.forEach(function(elem){
    var data=document.createElement("a");
    data.innerText=elem;
    document.querySelector("#footer_link_content_3").append(data)
})

var otherArr=["Fragrances","Tools & Brushes"]
otherArr.forEach(function(elem){
    var data=document.createElement("a");
    data.innerText=elem;
    document.querySelector("#footer_link_content_4").append(data)
})

var mySephoraArr=["My orders","Store locator","Sephora Facebook","Sephora Instagram"];
mySephoraArr.forEach(function(elem){
    var data=document.createElement("a");
    data.innerText=elem;
    document.querySelector("#footer_link_content_5").append(data)
})
