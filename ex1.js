var submit = document.getElementById('submit');
var input = document.getElementById('txtSecondNumber');

function sum()
{
    var FirstNumber = 1;
    var SecondNumber = input.value;
    
    var result = 0;
    
    for (var i = FirstNumber; i <= SecondNumber; i++) {
      result += i;  
    }
    
    alert(result);
}


button.addEventListener('click',addWord);

function addWord() {
    

    var ans = prompt('Do you want to play');
    var choice = ans;
//var together ='';
if (choice = "yes") { 
  
   
     do {
         var together;
        var ans = prompt('Enter in a word  ');
        console.log('ans:' + ans);
        together += ans;
        
        
    var choice = prompt('Do you want to play');
   
    }
    while (choice != "no");
    console.log('word:' + together);
    
}

}



    var b = document.getElementById("button-print");
    
    
    
        var b = document.getElementById("button-print");
        b.addEventListener('click',printName);
        function printName(){
        var count;
        var ep =['!'];
            while(ans != "no"){
                var ans = prompt('Would you like to print your name');
                if(ans == 'yes'){
                    var name = prompt('What is your name?');
                    console.log(name);
                    count++;
                    var ans = prompt('Would you like to print your name');
                }
                  else  if(ans == "yes" && count > 1){
                        var name = prompt('What is your name?');
                        for(i=count; i<count; count--){
                            console.log("Hello my name is" + name + count[i])
                        }
                        
                    }
            
                }
        
            }
            var btn = document.getElementById("what");
            btn.addEventListener('click',meal);
            function meal(){
                var q = prompt('Do you want to eat');
                while(ans != "no"){
               
                    if(q == "yes"){
                        var ans = prompt('What time of day is it?(morning, evening, or noon?) ' + " " + "Pres no to exit");
                    switch(ans){
                        case "morning":
                        console.log("Since it is morning, you should be eating breakfast. We suggest eggs and toast")
                        var ans = prompt('Do you want to eat?');
                        break;

                        case "noon":
                        console.log("Since it is noon, you should be eating dinner. We suggest salad.");
                        var ans = prompt('Do you want to eat?');

                        break;
                        case "evening":
                        console.log("Since it is evening, you should be eating dinner. We suggest chicken and rice.");
                        break;
                        case "no":
                    break;
                        
                    }
                    }
                    
                    }
            
                }