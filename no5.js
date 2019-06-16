var string=prompt("masukan String");
var word=prompt("masukan kata yang ingin dicari");
var p_string=string.length;
var p_word=word.length;
if(p_word <= p_string){
  var sstr=string.split('');
  var ww=word.split('');
  var cek=i=0;
  var sama=-1;
  var cek2=0;
  var batas=p_string-1;
  while(i<=batas){
    if(sstr[i]===ww[cek]){
      cek=cek+1;
      if(cek==p_word){
        sama++;
     		console.log('ini'+cek,sama,cek2);
    	  cek2++;
    	  i=cek2;
        cek=0;
    	  }
      }
    i++    
  }
  if(sama<=0){
    sama=0;
  }else{
    sama=sama*2
  }
console.log(sama);
}else{
  console.log('pencarian  terlalu panjang')
}

