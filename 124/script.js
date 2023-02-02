// api url
const api_url =
	"https://inshorts.deta.dev/news?category=technology";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		// `<tr>
		// <th>Name</th>
		// <th>Office</th>
		// <th>Position</th>
		// <th>Salary</th>
		// </tr>`;
		`<div width="400" height="300">
		<!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
		<div class="card-body">
		
		</div>
		</div>
		`;
	
	// Loop to access all rows
	for (let r of data.data) {
		tab +=
// 		 `<tr>
// 	<td>${r.author} </td>
// 	<td>${r.content}</td>
// 	<td>${r.date}</td>
// 	<td>${r.id}</td>		
// </tr>`;
` 	<div class="card" style="width: 30rem;">

<div class="card-body" align="center">
<div class="image_display" width="400" height="300">
 <img src = ${r.imageUrl} width="200" height="200" ></div>
  <h5 class="card-title" id="card_title" >${r.author}</h5>
  <h5 class="card-title" id="card_title" >${r.title}</h5>
  <p class="card-text" id="card_text"> ${r.content}</p>
  <p>${r.date}</p>
  <a href=${r.url} class="btn btn-primary">Go somewhere</a>
</div>
</div>`;
	}

	// for refrence of the type of data in the api
	//"data":[{"author":"Ankush Verma",
	// "content":"During her Budget 2023 speech, Finance Minister Nirmala Sitharaman said that the government will set up 100 labs for 5G applications in engineering institutes. She further said that the recently launched National Green Hydrogen Mission with an outlay of \u20b919,700 crore will facilitate the transition of the economy to low carbon intensity and reduce dependence on fossil fuel imports.",
	// "date":"01 Feb 2023,Wednesday",
	// "id":"dd57bb72a7634cc2aec6b99038ec4e35",
	// "imageUrl":"https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/02_feb/1_wed/img_1675232583046_414.jpg?",
	// "readMoreUrl":null,
	// "time":"12:23 pm",
	// "title":"100 labs for 5G apps to be set up in engineering institutes: FM Sitharaman",
	// "url":"https://www.inshorts.com/en/news/100-labs-for-5g-apps-to-be-set-up-in-engineering-institutes-fm-sitharaman-1675234432948"}
	// Setting innerHTML as tab variable
	document.getElementById("employees").innerHTML = tab;
}
// function carddis(){
// 	console.log(data.author);
// 	document.getElementById("card_title").innerHTML= data.data.author ;
// }
