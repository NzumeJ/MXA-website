var btc = document.getElementById("bitcoin");
var eth = document.getElementById("etherium");
var doge = document.getElementById("dogecoin");

var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "here we have to add the api link for the code",
    "method": "GET",
    "headers": {}
}

$.ajax(settings).done(function (response){
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.etherium.usd;
    doge.innerHTML = response.dogecoin.usd;
});