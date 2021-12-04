
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
        username: 'Arthas',
        age : 20
    },
    {
        username: 'ForgottenOne',
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
    li.textContent = item.age > 18 ? item.username : "not specified"
    ul.appendChild(li);
    li.style.fontSize = '30px';
})

let btn = document.querySelector('#btn');
let textdiv = document.querySelector('#thirdi');
let button =document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');

btn.style.width = '300px';
btn.style.height = '300px';
btn.style.fontSize = '35px';
btn.style.backgroundColor ="cyan";


thirdi.style.width ='500px';
thirdi.style.fontSize ='35px';


btn.onclick = () => {
    main.style.display = 'none';
    
};

btn2.style.width = '300px';
btn2.style.height = '300px';
btn2.style.fontSize = '35px';
btn2.style.backgroundColor ="cyan";

btn2.onclick = () => {
    main.style.display = 'block';
};


btn3.style.width = '300px';
btn3.style.height = '300px';
btn3.style.fontSize = '30px';
btn3.style.backgroundColor ="cyan";


btn3.onclick =() =>{
    thirdi.style.color = 'blue';
    thirdi.style.fontSize ='25px';

}

btn4.style.width = '300px';
btn4.style.height = '300px';
btn4.style.fontSize = '30px';
btn4.style.backgroundColor ="cyan";

btn4.onclick =() =>{
    thirdi.style.removeProperty("color");
    thirdi.style.fontSize = "35px";

}




