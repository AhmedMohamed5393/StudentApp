$(document).ready(function(){
    $("#search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#studentTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
});
const api_url = "https://mygfgapi.free.beeceptor.com/my/api/path";
async function getapi(url) { 
	const response = await fetch(url); 
	var apidata = await response.json(); 
	if (response) { 
		hideSpinner(); 
	} 
	document.getElementsById("data").innerHTML 
		= `<h1>${apidata.data}</h1>`; 
}
getapi(api_url);
function hideSpinner() { 
	document.getElementById('spinner') 
			.style.display = 'none'; 
} 
