const btn = document.querySelector('.btn');
const list = document.querySelector('.list');
const data = JSON.parse(localStorage.getItem('item')) || [];
const input = document.querySelector('.text');

update(data);

function addData (e){
    let addItem = input.value;
    let todo = {};
    todo.item = addItem;
    data.push(todo);
    localStorage.setItem('item',JSON.stringify(data));
    update(data);
    document.getElementById("text").reset();
}

function update(data){
    let len = data.length;
    let str ='';
    for (let i=(len-1);i>=0;i--){
        str+=`<li>${data[i].item}<a href="#"><i class="fas fa-trash-alt" data-id="${i}"></i></a></li>`
    };
    list.innerHTML = str;
}

function delDate(e){
    if (e.target.tagName == "I"){
        let index =e.target.dataset.id
        data.splice(index,1)
        localStorage.setItem('item',JSON.stringify(data));
        update(data);
    }
}

btn.addEventListener('click',addData);
list.addEventListener('click',delDate);
