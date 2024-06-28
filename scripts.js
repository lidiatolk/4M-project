document.addEventListener('mousemove', (event) => {
    const image = document.querySelector('.watchfr');
    const rect = image.getBoundingClientRect();
    
    const imageX = rect.left + rect.width / 2;
    const imageY = rect.top + rect.height / 2;

    const angle = Math.atan2(event.clientY - imageY, event.clientX - imageX) * 180 / Math.PI;
    
    image.style.transform = `rotate(${angle}deg)`;
});

document.addEventListener('mousemove', (event) => {
    const image = document.querySelector('.watchsc');
    const rect = image.getBoundingClientRect();
    
    const imageX = rect.left + rect.width / 2;
    const imageY = rect.top + rect.height / 2;

    const angle = Math.atan2(event.clientY - imageY, event.clientX - imageX) * 180 / Math.PI;
    
    image.style.transform = `rotate(${angle}deg)`;
});

document.addEventListener('mousemove', (event) => {
    const image = document.querySelector('.watchth');
    const rect = image.getBoundingClientRect();
    
    const imageX = rect.left + rect.width / 2;
    const imageY = rect.top + rect.height / 2;

    const angle = Math.atan2(event.clientY - imageY, event.clientX - imageX) * 180 / Math.PI;
    
    image.style.transform = `rotate(${angle}deg)`;
});

document.addEventListener('mousemove', (event) => {
    const image = document.querySelector('.watchfot');
    const rect = image.getBoundingClientRect();
    
    const imageX = rect.left + rect.width / 2;
    const imageY = rect.top + rect.height / 2;

    const angle = Math.atan2(event.clientY - imageY, event.clientX - imageX) * 180 / Math.PI;
    
    image.style.transform = `rotate(${angle}deg)`;
});



