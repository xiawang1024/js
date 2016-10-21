var nameshow=(function(){
	var name="gyy";
	return {
		printName:function(){
			alert(name);
		}
	}
})();
module.exports={nameshow:nameshow.printName}