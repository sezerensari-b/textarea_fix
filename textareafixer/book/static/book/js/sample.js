const contentText = document.getElementById('id_content');

function checkAndReplace(text) {
    const invalidCharacters = [
        '•',
        '·',
        //'\t',
        'o'
    ];

    invalidCharacters.forEach(char => {
        if (text.includes(char)) {
            text = text.replaceAll(char, '');
            console.warn(`Geçersiz karakter bulundu ve kaldırıldı: ${char}`);
        }
    });

    return text;
}

contentText.addEventListener('input',(e)=>{
    console.log(checkAndReplace(contentText.value))
    contentText.value = checkAndReplace(contentText.value)
})