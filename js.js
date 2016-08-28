var integerArray = [], indices = [];

function addInteger(e) {
  integerValue = document.getElementById('numberInput').value;
  integerArray.push(integerValue);
  document.getElementById('integerArray').innerHTML += (integerArray.length == 1 ? "" : "," ) + integerValue;
  document.getElementById("numberInput").value = "";

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
    )
    {
      indices.push(i);
    }
  }
  document.getElementById('indicesArray').innerHTML = indices;
};
