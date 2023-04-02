const openModal = document.querySelectorAll('.js-open-modal');
const header = document.querySelector('.js-header');
const modal = document.querySelector('.js-modal');
const closeModal = document.querySelector('.js-close-modal');
const contentModal = document.querySelector('.js-content-modal');
// Открытие модалки по разным кнопкам с разным заголовком

const listTitle = {
    'name-1': 'Серёжа',
    'name-2': 'Антон',
    'name-3': 'Никита',
    'name-4': 'Наташа',
    'name-5': 'Молчок',
}

openModal.forEach(item => {
    item.addEventListener('click', function() {
        const title = item.dataset.modal;
        const modalTitle = modal.querySelector('h1');
        modalTitle.innerHTML = listTitle[title];
        modal.classList.add('show');
    });
})
// закрытие модалки
closeModal.addEventListener('click', function() {
    modal.classList.remove('show')
});

// добавление списка
const addList = () => {
    const mapList = ["сиськи", "письки", "жопки"];
    const contentListInModal = document.createElement('ul');
    const newMapList = mapList.map((item) => {
        const contentItemInList = document.createElement('li');
        contentModal.append(contentListInModal);
        contentListInModal.append(contentItemInList);
        return contentItemInList.innerHTML = item;
    })
    console.log(newMapList);
}

addList();
