function biner(angka){
  var bin=[];
  var i=angka;
  var b=0;
  while(i>0){
    if(i%2===0){
      bin[b]=0;
    }else{
      bin[b]=1;
      i=i-1;
    }
    b++;
    i=(i/2);
  }
  var tmp='';
  for(var ii=bin.length-1;ii>=0;ii--){
    tmp +=bin[ii];
  }
  return tmp;
}
var desimal=prompt("masukan angka");
console.log(biner(desimal));
