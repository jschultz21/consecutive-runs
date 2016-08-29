var integerArray = [], indices = [];

function addInteger(e) {
  event.preventDefault()
  integerValue = document.getElementById('numberInput').value;
  if (integerValue){
    integerArray.push(integerValue);
    document.getElementById('integerArray').innerHTML += (integerArray.length == 1 ? "" : ", " ) + integerValue;
    document.getElementById("numberInput").value = "";
  }
};

var reset = function () {
  document.getElementById("indicesArray").innerHTML = "";
  document.getElementById('integerArray').innerHTML = "";
  integerArray = [];
  indices = [];
};

function searchConsecutiveNumbers() {
  for (var i=0; i<integerArray.length; i++) {
    var a = integerArray[i];
    var b = integerArray[i+1];
    var c = integerArray[i+2];

    if (
      ((a-b == -1) && (b-c==-1) && (a-c==-2)) ||
      ((a-b==1) && (b-c==1)&&(a-c==2))
    ){
      indices.push(i);
    }
  }
  if (indices.length>0){
    document.getElementById('indicesArray').innerHTML = indices;
  }
  else {
    document.getElementById('indicesArray').innerHTML = "no runs found!";
  }
};
