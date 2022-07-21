function Extract_Vowels(){
    //vars
    var vowels = ['a','e','i','o','u'];
    var text = document.getElementById('t').value;
    var Vowels_Count = 0;

    for(var i = 0;i <= text.length;i++){
        if(vowels.includes(text[i])){
            Vowels_Count++;
        }
    }

    document.getElementById("RW").innerHTML  = Vowels_Count;
}