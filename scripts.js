function adjustFontSize(action) {
    const elements = document.querySelectorAll('#text, ul');
    elements.forEach(element => {
        let currentSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
        let currentSizeNumber = parseFloat(currentSize);

        if (action === 'increase') {
            element.style.fontSize = (currentSizeNumber + 2) + 'px';
        } else if (action === 'decrease') {
            element.style.fontSize = (currentSizeNumber - 2) + 'px';
        }
    });
}
