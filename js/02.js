window.onload=function(){
	var oDiv=document.getElementsByTagName('div')[0];
	require(['add'],function(add){oDiv.innerHTML=add.add(1,3)});

	
}