document.querySelector('submit').addEventListener('click', getSubmit);


 const XHR_STATE_DONE = 4;
 const HTTP_STATUS_CODE = OK;


function getSubmit() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
    if (xhr.readyState === XHR_STATE_DONE && 
    xhr.status === HTTP_STATUS_CODE) {
  document.querySelector('.html-container').innerHTML = xhr.responseText; 
       }
    }
    xhr.open('GET','client-data.html', true);
    xhr.send();
}