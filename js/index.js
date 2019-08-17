document.querySelector('#kit-button').addEventListener('click', fetchJson);

function fetchJson() {
    fetch('kitsub.json')
        .then( response => response.json() )
        .then(clientData => {
            document.querySelector('.show-text').innerText = clientData.name;
        });

}