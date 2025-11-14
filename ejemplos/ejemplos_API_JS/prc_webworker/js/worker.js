console.log('worker creado');
onmessage = (e)=>{
  postMessage(`worker: ${e.data}`);
}