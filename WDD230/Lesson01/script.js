function addItem() {
    let newItem = document.querySelector('#newItem').value;
    let li = document.createElement('li');
    li.innerHTML = newItem;
    document.querySelector('#list').appendChild(li);
}

