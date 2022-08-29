var question_list= [
    
    "How many continents are there?",              //pehla question

    "What is the capital of India?",            // doosra question

    "NG mei kaun se course padhaya jaata hai?" ,   // teesra question

    "which state of india has no shortest coastline?" ,  //fourth question

    " which of these viruses taken it is name from a place  in malaysia?"  //fifth question
]

var options_list = [

    ["Four", "Nine", "Seven", "Eight"],

    ["Chandigarh", "Bhopal", "Chennai", "Delhi"],

    ["Software Engineering", "Counseling", "Tourism", "Agriculture"],

    ["maharastra","goa","odisa","west bangal"],

    ["nipah","ebola","influenia","HIV"]
]

var solution_list = [3, 4, 1, 2,2]


var answer=[["3.seven","4.eight"],["3.chennai","4.delhi"],["1.software enginearing","2. councealing"],["2. goa","3. odisa"],["2.ebola","4.HIV"]]

var i=0
var count=0
var p=0
console.log("welcome 🙏!To kaun banega cadepati(kbc):")
const d=require("readline-sync")
while (i<question_list.length){
    console.log("your question is 😊 :")
    console.log(question_list[i])
    console.log("your option is 😀 :")
    var j=0
    var z=i
    while (j<options_list[i].length){
        s=(options_list[z][j])
        console.log(j+1,s)
        j++
        }
        const c=d.question("do you want 50-50 lifeline 🙂:")
            if  (c=="yes"){
                console.log("accept")
                // break
                if (count==0){
                    console.log(answer[z])
                    const r=d.questionInt("enter answer")
                    if (r == solution_list[i]){
                        console.log("  well play !.your answer is Correct: ")
                         p=p+10000
                        console.log(" you win" ,p,"🤩")}
                    else {
                        console.log("Incorrect answer.",("\U0001F612"))
                        console.log("win",p,"🤩")
                        // count++
                        break
                    }
                    count++
            }else{
                console.log("sorry ! u already use lifeline")
                 const r2=d.questionInt("enter answer")
                if (r2== solution_list[i]){
                    console.log("  well play 🎊!.your answer is Correct: ")
                    p=p+10000
                    console.log(" you win",p,"🤩")}
                else{
                    console.log("Incorrect answer","😇")
                    console.log(" you win",p,"🤩")}
                }
            }
        else {
             const r3= d.questionInt("enter answer")
            if (r3==solution_list[i]){
                console.log("correct your answer  😎")
                p=p+10000
                console.log(" you winn",p,"🤩")}
            else{
                console.log("wrong answer")
                console.log(" you win",p,"🤩")
                break
    }
    }
    i++
}
console.log("you win total amount👍",p)
console.log("congratulations !,🥳🥳")
console.log("thankyou 😎! for participate in kbc:")
console.log("Game Over 🙏")