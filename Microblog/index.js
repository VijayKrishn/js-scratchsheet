//  sessionStorage.setItem('name','Kazi');
//  localStorage.setItem('name','Ariyan');
let headers = document.getElementsByClassName('header');
headers = Array.from(headers);
headers.forEach((element, index) => {
    console.log(element.className);
    element.style.color = '#fff';
    element.style.backgroundColor = '#ddd';
    element.style.padding = '15px';
    // element.innerText = `HI : ${index}`;
});
console.log(headers);

let headers_one = document.getElementsByTagName('HI');
elems = Array.from(headers_one);
elems.forEach((item) => {
    console.log(item);
});

let tbody = document.querySelector('tbody');
console.log(tbody);
console.log(tbody.children);
console.log(tbody.childElementCount);

console.log(tbody.children[1].innerHTML);
console.log(tbody.firstElementChild);
console.log(tbody.lastElementChild);

// tbody.children[1].innerHTML = `<span>This is Vijay</span>`;

const tr = document.createElement('tr');
const td1 = document.createElement('td');

td1.className = 'post';
td1.innerText = 'post 6';
td1.id = 'post-id';
td1.setAttribute('title', 'post-title-6');

console.log(td1.outerHTML);

const td2 = document.createElement('td');
const span = document.createElement('span');
span.className = 'fa fa-times float-right pr-3';
td2.append(span);
console.log(td2.outerHTML);
tr.append(td1, td2);


const clearBtn = document.querySelector('.clear-post');
clearBtn.addEventListener('mouseenter', function(event){
    console.log('Hi Vijay');
    document.querySelector('tbody').append(tr);
});

// localStorage.setItem('age', 50);
// localStorage.setItem('name', 'vijay');
// console.log(localStorage.getItem('age'));
// localStorage.removeItem('age');

// const users = [
//     {name: 'Vijay', age : 32},
//     {name: 'krishn', age: 45}
// ];
// localStorage.setItem('users', JSON.stringify(users));
// console.log(JSON.parse(localStorage.getItem('users')));

// sessionStorage.setItem(users, JSON.stringify(users));