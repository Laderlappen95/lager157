// Function to dynamically determine the relative path to the root directory
function getRootPath() {
    const pathArray = window.location.pathname.split('/');
    let path = '';
    for (let i = 1; i < pathArray.length - 1; i++) {
        if (pathArray[i] !== 'web' && pathArray[i] !== 'frontend') {
            path += '../';
        }
    }
    return path;
}

// Function to add the footer
function addHeader() {
   
    const headerHTML = `
    <header class="mainHeader">
    <nav id="headerNav">
    <a id="topMenuButton" href="index.html">☰</a>
    <ul>
        <li><a href="#tjejer">Tjejer</a></li>
        <li><a href="#killar">Killar</a></li>
        <li><a href="">Moderkort</a></li>
        <li><a href="./pages/killar.html">SSD</a></li>
        <li><a href="#about">Om</a></li>
    </ul>
</nav>
    </header>`;

    document.body.insertAdjacentHTML('beforeend', headerHTML);
}

// Call the function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', addHeader);