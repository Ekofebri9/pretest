var input=prompt("masukan nilai tinggi atau alas");
var bil=[];
var ya;
var ii=2,b=0;
function prima(n){
  var max=Math.sqrt(n);
  for(i=2; i<=max; i++){
    if(n%i==0){
      return false;
    }
  }
  if(n>1){
    return n;
  }else{
    return false;
  }
}

while(b!=input){
  ya=prima(ii);
  if(typeof ya==typeof NaN){
    bil.push(ya);
    b=bil.length;
  }
  ii++;
}
for(var a=1;a<=input;a++){
  var lil2=[];
  for (var aa = 0; aa<a; aa++) {
    lil2.push(bil[aa]);
  }
  console.log(lil2);
}

