function myFunc(){
    var a= document.getElementById("inp").value
    var b= document.createElement('li')
    b.setAttribute('onclick','deleteOne(event)')
    b.appendChild(
        document.createTextNode(a))
        document.getElementById(
        "lis").appendChild(b)
    document.getElementById("inp").value=""
}

function deleteOne(eve){
    var d=confirm ("Do you want to remove")
   if(d==true) {
    eve.target.remove()
   }
   else{
    alert ('action canceled')
   }
   
}

function myDelete(){
    document.getElementById('lis').innerHTML = '';
}