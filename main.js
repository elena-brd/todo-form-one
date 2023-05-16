const form = document.querySelector('#todoForm');
const input = document.querySelector('#items');
const list = document.querySelector('#list');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    // console.log(input.value);
    const newLlistItem = document.createElement('li');
    newLlistItem.innerText = input.value;
    list.append(newLlistItem);

    input.value = '';

})