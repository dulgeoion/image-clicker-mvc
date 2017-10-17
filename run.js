var model = function(){
	var cats = {};

	function allCats(){
		var catsObj = {};
		$("div").each(function(){
			catsObj[""+$(this).attr("id")] = $(this).find("h1").text();
		});
		return catsObj;
	}

	return {
		cats: allCats()
	}
}

var view = function(catsObj){

	function renderh1(catsObj){
		
		for(var key in catsObj){
			$("#"+key+">h1").html(catsObj[key]);
			console.log("catsobj["+key+"] = "+catsObj[key]);
		}
		
	}
	return {
		render: renderh1(catsObj)
	}
}

var control = function(model, view){

	function catClicked(model, view){
		$("body").delegate("div", "click", function(){

			var cat = $(this).attr("id"); console.log(cat);
			model[cat] = parseInt($(this).find("h1").text())+1; console.log(model[cat]);
			$(this).find("h1").text(model[cat]);
		});
		view.render;
	}

	return{
		click: catClicked(model, view)
	}

}


var m = new model();
var v = new view(m.cats);
var c = new control(m.cats, v);