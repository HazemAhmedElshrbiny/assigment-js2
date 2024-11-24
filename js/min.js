var quote = [
    {
        'qoute' : '"Do not take life too seriously. You will not get out alive."',
        'Auther' : '--Elbert Hubbard'
    },

    {
        'qoute' : '"Resentment is like drinking poison and waiting for your enemies to die."',
        'Auther' : '--Nelson Mandela'
    },

    {
        'qoute' : '"The best revenge is massive success."',
        'Auther' : '--Frank Sinatra'
    },
    {
        'qoute' : '"You miss 100% of the shots you dont take."',
        'Auther' : '--Wayne Gretzy'
    }
]

function getQoutes() {
    var num = Math.floor(Math.random()*quote.length)
   console.log(num);
   

     document.getElementById("qoute") .innerHTML =quote[num].qoute;
    document.getElementById("Auther") .innerHTML =quote[num].Auther;
    
}