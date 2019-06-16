var jumlah_uang = 50000;
var harga_mie = 2500;
var bunus = 1;
var bonus_setelah_beli = 4;

var membeli= Math.floor(jumlah_uang/harga_mie);
var bonus= Math.floor(membeli/bonus_setelah_beli);
var mie_yg_didapat=membeli+bonus;

console.log(mie_yg_didapat);

