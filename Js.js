// console.log("workingg");
let questiondata = [
    {
        'q': 'which is the firsr planet in solar system',
        'a': 'mercury',
        'b': 'venues',
        'c': 'earth',
        'd': 'mars',
        'correct':'a',
    },
    {
        'q': 'colour of earth is ',
        'a': 'black',
        'b': 'blue',
        'c': 'green',
        'd': 'brown',
        'correct':'b',
    },
    {
        'q': 'capital of India is ',
        'a': 'Delhi ',
        'b': 'U.P',
        'c': 'Mumbai',
        'd': 'Lucknow',
        'correct':'a',
    },
    {
        'q': 'Answer is d ',
        'a': 'opt2',
        'b': 'b',
        'c': 'Qc',
        'd': 'Question',
        'correct':'d',
    },
]
let index=0, right=0, wrong=0 ;

let total=questiondata.length;
const qbox =document.getElementById("ques");
let allInputs = document.querySelectorAll("input[type='radio']")

function loadquestion(){
    console.log("index: " + index);
    if(total==index){
        return quizEnd();
    }
    reset();
    const data = questiondata[index];
    console.log(data);
    qbox.innerHTML = `${index+1})${data.q}`;
    document.getElementById("ques").innerHTML=data.q;
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}
loadquestion();

function reset(){
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}
function submitquiz(){
    console.log("submit");
    const data = questiondata[index];
    const ans=checkedoption();
    console.log(ans,data.correct);
    if(ans==data.correct) {
        right++;
        console.log("RIght "+right);
        console.log("Wrong "+wrong);
    }
    else{
        wrong++;
        console.log("RIght "+right);
        console.log("Wrong "+wrong);
    }
    index++;
    loadquestion();
}
function checkedoption(){
    let t;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                t=inputEl.value;
            }
        }
    )
    return t;
}
function quizEnd(){
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("box")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> Hii, you've scored ${right} / ${total} </h3>
        </div>
    `
    }
loadquestion(index);