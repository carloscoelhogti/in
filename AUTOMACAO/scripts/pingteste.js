//cancela A
var cont_cancelaA = 0;

document.getElementById( "bt_cancelaA" ).onclick = function() {  
if(cont_cancelaA == 0)
{
acancelaA();
cont_cancelaA += 1;
}
else
{
bcancelaA();
cont_cancelaA = 0;
}
}

function acancelaA(){
//alert('função A');
  document.getElementById("msg").innerHTML="Cancela A Online";
  document.getElementById("bt_cancelaA").textContent="Cancela A Online";
  document.getElementById('bt_cancelaA').style.backgroundColor = 'green';
  document.getElementById('bt_cancelaA').style.border = 'green';
  document.getElementById('bt_cancelaA').style.color = 'white';
}

function bcancelaA(){
//alert('função B');
  document.getElementById("msg").innerHTML="Cancela A Offline";
  document.getElementById("bt_cancelaA").textContent="Cancela A Offline";
  document.getElementById('bt_cancelaA').style.backgroundColor = 'red';
  document.getElementById('bt_cancelaA').style.border = 'red';
  document.getElementById('bt_cancelaA').style.color = 'white';
}

//cancela B

var cont_cancelaB = 0;

document.getElementById( "bt_cancelaB" ).onclick = function() {  
if(cont_cancelaB == 0)
{
acancelaB();
cont_cancelaB += 1;
}
else
{
bcancelaB();
cont_cancelaB = 0;
}
}

function acancelaB(){
//alert('função A');
  document.getElementById("msg").innerHTML="Cancela B Online";
  document.getElementById("bt_cancelaB").textContent="Cancela B Online";
  document.getElementById('bt_cancelaB').style.backgroundColor = 'green';
  document.getElementById('bt_cancelaB').style.border = 'green';
  document.getElementById('bt_cancelaB').style.color = 'white';
}

function bcancelaB(){
//alert('função B');
  document.getElementById("msg").innerHTML="Cancela B Offline";
  document.getElementById("bt_cancelaB").textContent="Cancela B Offline";
  document.getElementById('bt_cancelaB').style.backgroundColor = 'red';
  document.getElementById('bt_cancelaB').style.border = 'red';
  document.getElementById('bt_cancelaB').style.color = 'white';
}

//realizando ping

		$.getJSON('http://whateverorigin.org/get?url=' + encodeURIComponent('http://www.facebook.com') + '&callback=?', function(data){
			if(data){
				//console.log(data.status);
        document.getElementById("data").innerHTML=data.status;
			}else{
				return("servidor offline");
			}
		});	