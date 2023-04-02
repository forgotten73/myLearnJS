const openModal = document.getElementsByClassName('js-open-modal');
const header = document.getElementsByClassName('js-header');
const modal = document.getElementsByClassName('js-modal');
const closeModal = document.getElementsByClassName('js-close-modal');

[...header[0].children].forEach(item => {
    item.addEventListener('click', function() {
        modal[0].classList.add('show');
        if (item.dataset['firstModal']) {
            modal[0].querySelector('h1').innerHTML = 'Серёжа'
        } else if (item.dataset.hasOwnProperty('secondModal')) {
            modal[0].querySelector('h1').innerHTML = 'Антон'
        } else if (item.dataset.hasOwnProperty('thirdModal')) {
            modal[0].querySelector('h1').innerHTML = 'Никита'
        } else if (item.dataset.hasOwnProperty('fouthModal')) {
            modal[0].querySelector('h1').innerHTML = 'Наташа'
        } else if (item.dataset.hasOwnProperty('fiveModal')) {
            modal[0].querySelector('h1').innerHTML = 'Молчок'
        }
    });
    console.log(item.dataset);
})


closeModal[0].addEventListener('click', function() {
    modal[0].classList.remove('show')
});
