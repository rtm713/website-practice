let textBox = document.getElementById("textBox");
let inputBox = document.getElementById("inputBox");
let submit = document.getElementById("submit");

let value;
let check = 0;

textBox.textContent = "What is your name?";

function collectInput(){ 
    value = inputBox.value;
    check++;
    loop(value);
};

submit.addEventListener("click", function() {
    collectInput();
    console.log(value + ' submitted');
});

function loop(value){
    while(check === 1) {
        let newValue = value;
        textBox.textContent = "so your name is " + newValue +"?";
        if (newValue === 'yes'){
            textBox.textContent = "Great! Well nice to meet you, " + newValue +"!";
            break;
        }
        if (newValue != 'yes'){
            textBox.textContent = "Well then what is your name?";
        }
    }
    end();
}

function end(){
    textBox.textContent = "PROGRAM END";
    check = 0;
}


