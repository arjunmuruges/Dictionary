function reloadPage()
{
       location.reload();
    
}
function wordSearch()
{
    const result=document.getElementById("Definition");
    const word=document.getElementById("searchbox").value;
    var request1 = new XMLHttpRequest();
  request1.onreadystatechange= function() 
    {
        if(this.readyState == 4 && this.status == 200)
        {
            const data = JSON.parse(this.response)[0]['meanings'];
            document.getElementById("Meaning").innerHTML='meanings:';
            data.forEach(function(key,value) {
            result.innerHTML += key.definitions[value]['definition']+'<br><br>';              
            });
        }
    };
    request1.open('GET','https://api.dictionaryapi.dev/api/v2/entries/en/'+word,true);
   request1.send();
}



























































































