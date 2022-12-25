let textNumber = document.getElementById('text-num');

let incrementBtn = document.getElementById('increment-btn');
let decrementBtn = document.getElementById('decrement-btn');
let saveBtn = document.getElementById('save-btn');
let saveText = document.getElementById('save-text');

// increment Btn

let count = 0

incrementBtn.onclick = function(){
    textNumber.innerText = count
    count += 1 
};

// decrementBtn.onclick = function(){
//     textNumber.innerText = count
//     saveText.innerText = count
//     count -= 1 
// };

// save

function save(){
     let saveString = count + '-'

    saveText.textContent += saveString

    textNumber.innerText = 0
    count = 0

};  

 
    




