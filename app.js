
//Select the Dom elements.

const display = document.querySelector('#display');

const list = document.querySelector('#list');

const imgd = document.querySelector('#imgd');

const bt = document.querySelector('#bt');

const exit = document.querySelector('#exit');

//Add Event listener to list

list.addEventListener('click', (e) => {
    if(e.target.tagName === 'IMG'){
        imgd.setAttribute('src', e.target.src);
        imgd.classList.add('s-img');
        display.style.display = 'block';
        exit.style.display = 'inline';
    }
});

// Add event listener to <button>
// to add more <li> to list

bt.addEventListener('click', () => {
    let newli = document.createElement('li');
    
    //Delete new list <li>
    newli.addEventListener('dblclick',(e) => {
        del(e);
    });
    let newImg = document.createElement('img');
    let sc = prompt('Enter img src: ');
    if(sc){
        newImg.setAttribute('src', sc);

        if(check(newImg.src)){
           newli.appendChild(newImg);
           list.appendChild(newli); 
       } else {
           alert(`${newImg.src} is not valid!!`);
       }  
    }
});

//Delete img

for(let i = 0; i < list.children.length ; i++){
    list.children[i].addEventListener('dblclick',(e) => {
           del(e);
       });
 }

//Delete function

 function del(el){
    let item = el.target;
    item.parentNode.removeChild(item);
 }


// Remove img from display.

exit.addEventListener('click',() => {
    display.style.display = 'none';
    exit.style.display = 'none';
})


//Check if the user input has web imgs extds

const check = (string) => {
    const extds = ['jpg', 'jpeg', 'png', 'svg'];
    let str = checkHelp(string);
    return extds.includes(str);
}

const checkHelp = (str) => {
    // take the last 8 chars from the string
    str = str.slice(-8);

    str = str.toLowerCase();
    const indexOfFirst = str.indexOf('.');

    //take just the extds
    let str1 = str.slice(indexOfFirst + 1);
    return str1;
}
  





