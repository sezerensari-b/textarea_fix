const contentText = document.getElementById('id_content'); //Change id_content with id of your form's textarea

/**
 * Checks the input text for invalid characters and removes them.
 * Also removes list markers from the beginning of lines.
 * 
 * @param {string} text - The input text to be processed.
 * @returns {string} - The sanitized text with invalid characters removed.
 */
function checkAndReplace(text) {
    const invalidCharacters = [
        '•',
        '·',
        '\t',
        'Ø',
        '¨',
        '§'
    ]; // Write all unwanted characters in this array

    const invalidCharsRegex = new RegExp(invalidCharacters.map(char => `\\${char}`).join('|'), 'g');

    text = text.replace(/^\s*[\-\*\+]\s*/gm, '');  // Remove list markers like -, *, +
    text = text.replace(invalidCharsRegex, matched => {
        console.warn(`Invalıd characters has founded and removed: ${matched}`);
        return '';
    }); // Remove invalid characters and log a warning for each

    return text;
}

contentText.addEventListener('input',(e)=>{
    contentText.value = checkAndReplace(contentText.value)
}) // Add input event listener to the content text area
