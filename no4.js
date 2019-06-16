var array=[6,22,34,15,2,13,26,57,42,32];
var panjang=array.length;

function min(){
    var tmp=0;
    var tmp1=0;
    for(var i = 0;i < panjang;i++){
      for(var ii = i;ii < panjang;ii++){
        if(array[ii] <= array[i]){
          tmp1 = array[ii];
        }
      } 
        if(tmp > tmp1 || tmp === 0){
        tmp = tmp1;
      }
    }
    return tmp;
}

function max(){
  var tmp=0
  var tmp1=0;
  for (var i = 0; i < panjang; i++) {
		for (var ii = i; ii < panjang; ii++) {
			if(array[ii] >= array[i]){
				tmp1 = array[ii];
			}
		}
		if(tmp < tmp1){
			tmp = tmp1;
		}	
	}
	return tmp;
}

function sort_asc(){
  var tmp=0
  var tmp1=0;
  for (var i = 0; i < panjang; i++) {
		for (var ii = i; ii < panjang; ii++) {
			if(array[ii] <= array[i]){
				tmp1 = array[ii];
				array[ii]=array[i];
				array[i]=tmp1;
			}
		}	
	}
	return array;
}

function sort_des(){
  var tmp=0
  var tmp1=0;
  for (var i = 0; i < panjang; i++) {
		for (var ii = i; ii < panjang; ii++) {
			if(array[ii] >= array[i]){
				tmp1 = array[ii];
				array[ii]=array[i];
				array[i]=tmp1;
			}
		}	
	}
	return array;
}


console.log("data minimal: "+ min());
console.log("data maksimal: "+ max());
console.log("data ascending sort  : "+ sort_asc());
console.log("data descending sort : "+ sort_des());
