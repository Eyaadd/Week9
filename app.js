var arr1 = [" \“Be yourself; everyone else is already taken.”\  " ,
     "\“So many books, so little time.”\ ",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”" ,
    "“A room without books is like a body without a soul.”",
    "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    "“You only live once, but if you do it right, once is enough.”"
];
var arr2 = [" ― Oscar Wilde  " , "― Frank Zappa" , "― Albert Einstein" , "― Marcus Tullius Cicero" , "― Dr. Seuss", "― Mae West"];

var current = -1;


function show(){
    var random;
    do{
        random = Math.floor(Math.random()*arr1.length)
    }while(random == current);
    document.getElementById("quote").innerHTML = arr1[random];
    document.getElementById("author").innerHTML = arr2[random];
    current = random;
    console.log(random);
}