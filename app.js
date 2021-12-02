
const arr = [
    {
        username: 'Sayna',
        age : 15
    },
    {
        username: 'Thrall',
        age : 17
    },
    {
        username: 'Sylvanas',
        age : 19
    },
    {
        username: 'arthas',
        age : 20
    },
    {
        username: 'Forgottenone',
        age : 25
    },
    {
        username: 'Anduin',
        age : 11
    },
]
const mainDiv = document.getElementById('main');

const ul = document.createElement ('ul');
mainDiv.appendChild(ul);

arr.forEach(item => {
    const li = document.createElement ('li');
    li.textContent = item.age > 18 ? item.username : ""
    ul.appendChild(li);
})

// function handle (arr) {
//     let newArr = arr.filter(item => item.age > 18);
//     return console.log(newArr)
// }

const buttonDiv = document.getElementById('thirdi');

buttonDiv.style.width = '200px';
buttonDiv.style.border =' 5px solid cyan';
buttonDiv.style.textAlign = 'center';


const btn = document.querySelector('#btn');
// btn.style.width = "100px";
btn.style.backgroundcolor = 'cyan';
btn.setAttribute('type', 'submit');

if (btn.getAttribute('type') === 'submit'){
    btn.style.backgroundcolor = 'cyan';
} else {
    btn.getAttribute('disabled','');
    btn.style.backgroundcolor = 'yellow';

}



