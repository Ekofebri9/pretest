var x=prompt("masukan awal tinggi pohon");
var y=prompt("masukan durasi (dalam tahun)");
x=parseInt(x);
y=parseInt(y);

function semi(tumbuh){
  var pertumbuhan=tumbuh;
  x=x+pertumbuhan;
}

function gugur(tumbuh){
  x=x+1;
}

if(x>0 && y>0){
for(var i=1;i<=y;i++){
  semi(x);
  gugur(x);
}
console.log(x);
}else{
  console.log('x dan y harus lebih besar dari 0');
}

