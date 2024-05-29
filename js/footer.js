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
function addFooter() {
    const rootPath = getRootPath();
    const footerHTML = `
    <footer>
        <h1>Kontakt</h1>
        <p>Test Person </p>
        <p>Mejl: test.person@gmail.com </p>
    </footer>`;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// Call the function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', addFooter);