
function removeNote(e){
    var btn=document.getElementById('delBtn');
    var present=e.parentNode;
   e.parentNode.parentNode.removeChild(present);
}

function addNote(){
     var title=document.getElementById("title").value;
     var details=document.getElementById("details").value;
     var output=document.getElementById('output');
     var newNote=document.createElement("div");

     newNote.innerHTML=` 
       <h4>${title}</h4>
       <hr class="hrf">
       <p>${details}</p>
       <button onclick="removeNote(this)" id='delBtn'>Delete Note</button>
     `
     if(title !== '' && details !==''){
        output.appendChild(newNote);
        document.getElementById("title").value='';
        document.getElementById("details").value='';
     }else{
        var titleBox=document.getElementById("title");
        var detailsBox=document.getElementById("details");
        titleBox.style.border="1px solid red";
        detailsBox.style.border="1px solid red";
     }
   
}