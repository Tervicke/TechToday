let value = 1
updateAll("https://tervickenews.herokuapp.com/get/1")
console.log(document.getElementById("content").offsetWidth)

function previous(){
	if(value == 1){
		return 
	}
	value--;
	URL = "https://tervickenews.herokuapp.com/get/" + value;
	updateAll(URL)
}
function updateAll(URL){
	fetch(URL)
			.then(response => response.json())
			.then(
				data => updateInfo(data)
			);
	console.log(document.getElementById("content").offsetWidth)
}
function next(){
	value++;
	URL = "https://tervickenews.herokuapp.com/get/" + value;
	updateAll(URL)
}

function updateInfo(data){
	//updating image
	document.getElementById("image").src = data[2];
	//updating title
	document.getElementById("Main-title").innerHTML = data[0]
	//updating the title link
	document.getElementById("Main-title").href = data[3]
	//updating image link
	document.getElementById("image-link").href = data[2]
	//updating content
	console.log(typeof(data[4]));
	news_content = data[4][0];
	console.log(news_content);
	var e = document.querySelector("#news-content");
        
		//e.firstElementChild can be used.
		var child = e.lastElementChild; 
		while (child) {
				e.removeChild(child);
				child = e.lastElementChild;
		}

	for(var i = 0 ; i < news_content.length ; i++){
		let p = document.createElement("p");
		p.innerHTML = news_content[i];
		document.getElementById("news-content").appendChild(p);
	}
	let hr = document.createElement("hr");
	document.getElementById("news-content").appendChild(hr);
	//updating the date
	document.getElementById("date").innerHTML =data[1];
}
