const start_btn_script = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const responses = [];


let myPersoArray = {"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0}


// if startQuiz button clicked
start_btn_script.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}
// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}
// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
}

let que_count = 0;
let que_numb = 1;
const quit_quiz = result_box.querySelector(".buttons .quit");
const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

//this function return the response score
function generateScore(response){
    switch (response){
        case '<span>jamais</span>':return 0;
        case '<span>parfois</span>':return 1;
        case '<span>souvent</span>':return 2;
        case '<span>Toujours</span>':return 3;
    }
}
// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ 
        myPersoArray[questions[que_count].personality] += generateScore(responses[que_count]);//adding the user response to the personality array
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        next_btn.classList.remove("show"); //hide the next button


    }else{
        showResult(); //calling showResult function
    }
}
// getting questions and options from array
function showQuetions(index){

    const que_text = document.querySelector(".que_text");//selecting the text holder for the question
    let option_tag = "";
    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].number + ". " + questions[index].question +'</span>';
    let option_answer = "";
    for(option_answer in options){
        option_tag = option_tag + '<div class="option"><span>'+ options[option_answer] +'</span></div>'
    }//iterating through the options and addint them to the option_tag

    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
//if user clicked on option
function optionSelected(answer){
    const allOptions = option_list.children.length;
    if(responses.length >= que_count){//removing the selected font from the other selected answer
        for(let i=0; i < allOptions; i++){
            option_list.children[i].classList.remove("correct"); 
        }    
    }
    responses[que_count] = answer.innerHTML;
    answer.classList.add("correct");
    next_btn.classList.add("show"); //show the next button if user selected any option
}
//this function calculate the result of the test based on the collected data in the personality array
function showResult(){
    var max=0;
    var persoFinal=1;
    for(var key in myPersoArray){//just a little search algorithm
        if(myPersoArray[key] >= max){
            max = myPersoArray[key];
            persoFinal = key;
        }
    }


    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    let scoreTag = '<span>Calculating the results ... </span>';
    scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    var url= "http://who-am-i-deployment.herokuapp.com/template/"+(persoFinal-1);
    window.location = url;//redirection to the personality
    

}
//this function updates the question counter every question
function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter


}