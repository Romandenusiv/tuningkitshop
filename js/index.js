document.querySelector('#cheap-kit').addEventListener('click', cheapKit);

async function cheapKit () {
    const response = await fetch('cheapkit.html');
    const html = await response.text();
    document.querySelector ('.cheap-kit').innerHTML = html;

}


document.querySelector('#custom-kit').addEventListener('click', customKit);

async function customKit () {
    const response = await fetch('customkit.html');
    const html = await response.text();
    document.querySelector ('.custom-kit').innerHTML = html;

}

document.querySelector('#kit-button').addEventListener('click', fetchHtml);

async function fetchHtml () {
    const response = await fetch('kitsub.html');
    const html = await response.text();
    document.querySelector ('.html-container').innerHTML = html;

}

