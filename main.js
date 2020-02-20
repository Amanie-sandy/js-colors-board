const textArea = document.getElementById('textarea');
const btns = document.getElementById('button');

const colors = ['yellow','green','blue','#3b5998','red','orange', 'pink'];

btns.addEventListener('click', changeColor);
 
function changeColor(){
    // textArea.style.backgroundColor = colors[1]
    let random =  Math.floor(Math.random()*colors.length)
    textArea.style.backgroundColor = colors[random]
}