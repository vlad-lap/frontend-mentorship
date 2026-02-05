window.addEventListener('DOMContentLoaded', () => {
    let count = 0;

    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        count++;
        console.log(`Button clicked ${count} times`);
    });
});