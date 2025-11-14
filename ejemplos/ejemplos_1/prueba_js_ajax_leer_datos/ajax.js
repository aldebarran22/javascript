var databox;

function initiate(){
  databox = document.getElementById('databox');
 
  var button = document.getElementById('button');
  button.addEventListener('click', read);
}

function read(){
  var url = "texto.txt";
  var request = new XMLHttpRequest();
  request.addEventListener('load', show);
  request.open("GET", url, true);
  request.send(null);
}

function show(e){
  var data = e.target;
  if(data.status == 200){
    databox.innerHTML = data.responseText;
  }
}

addEventListener('load', initiate);

