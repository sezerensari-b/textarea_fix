const contentText = document.getElementById('id_content');

function checkAndReplace(text) {
    // const invalidCharacters = [
    //     '•',
    //     '·',
    //     '\t',
    //     'Ø',
    //     '¨',
    //     '§'
    // ];
    // text = text.replace(/^\s*[\-\*\+]\s*/gm, '')

    // invalidCharacters.forEach(char => {
    //     if (text.includes(char)) {
    //         text = text.replaceAll(char, '');
    //         console.warn(`Geçersiz karakter bulundu ve kaldırıldı: ${char}`);
    //     }
    // });
    const invalidCharacters = [
        '•',
        '·',
        '\t',
        'Ø',
        '¨',
        '§'
    ];

    const invalidCharsRegex = new RegExp(invalidCharacters.map(char => `\\${char}`).join('|'), 'g');

    text = text.replace(/^\s*[\-\*\+]\s*/gm, '');
    text = text.replace(invalidCharsRegex, matched => {
        console.warn(`Geçersiz karakter bulundu ve kaldırıldı: ${matched}`);
        return '';
    });

    return text;
}

contentText.addEventListener('input',(e)=>{
    console.log(checkAndReplace(contentText.value))
    contentText.value = checkAndReplace(contentText.value)
})
