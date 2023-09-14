    //alert and input
    alert("Welcome to the world of the Avengers!");

	n = prompt("What is your  name?");
	
	document.write("<h1>Welcome " + n + " to the Avengers!</h1>");
	

	
	

    //slider
	document.getElementById("rate").onchange = slide;

	function slide()
	{
	 var x = document.getElementById("rate").value;
	 if(x>60) {
		document.getElementById("like").innerHTML="Fantastic!";
		}
	 else if (x>40) {
			document.getElementById("like").innerHTML="Not too Shabby";
		}
	 else {
			 document.getElementById("like").innerHTML="Bad";
		 }


//image changing 
//bruce image source:https://www.ranker.com/list/best-bruce-banner-quotes/movie-and-tv-quotes
        //https://imgix.ranker.com/user_node_img/50095/1001891677/original/spit-it-out-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375

//hulk= https://cdn.vox-cdn.com/thumbor/Pvdo1lFYBBDbEG54FLW4tJ4pUcM=/0x0:2100x1181/1200x800/filters:focal(909x410:1245x746)/cdn.vox-cdn.com/uploads/chorus_image/image/67426099/experience_avengers_day.0.jpg
//https://www.polygon.com/marvels-avengers-guide/21438529/hulk-leveling-skills-best-tips-tricks
document.getElementById("brucebanner").onmouseover = changeOver;

document.getElementById("brucebanner").onmouseout = changeOut;
}
function changeOver()
{
document.getElementById("brucebanner").src = "images/hulk.jpg";
}

function changeOut()
{
document.getElementById("brucebanner").src = "images/brucebanner.jpg";
}


//drop down
function dropFunction() {
  document.getElementById("dropmenu").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbutton')) {
    var dropdowns = document.getElementsByClassName("dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 


//input avenger
function display(){
	var favourite = document.getElementById("favourite").value;
document.getElementById("avenger-time").innerHTML = favourite;
}




//random generator
function random(){
	var x = Math.floor(Math.random()*4)+1;
	
		if (x == 1){
		document.getElementById("avenger-name").innerHTML = "Avenger: Spiderman";
		document.getElementById("avenger-enemey").innerHTML = "Enemy: Doctor Octopus";
		document.getElementById("movie").innerHTML = "First Movie: Spider-man(2002)";
		document.getElementById("avenger-image").innerHTML =  '<img src="images/spiderman.png" alt="spider" height="300">';
		// image source: https://www.pngall.com/wp-content/uploads/2016/05/Spider-Man-Download-PNG.png
        //https://www.pngall.com/spider-man-png
		}

		         
	 
		if (x == 2){
		document.getElementById("avenger-name").innerHTML = "Avenger: Thor";
		document.getElementById("avenger-enemey").innerHTML = "Enemy: Surtur the Fire Giant"; 
		document.getElementById("movie").innerHTML = "First Movie: Thor(2011)";
		document.getElementById("avenger-image").innerHTML = '<img src="images/thor.png" alt="thors" height="300">';
		// image source: https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b8d2b12-21e8-4931-8a6d-fb9ecdd60383/dcms8il-7bfb1d76-d63a-45e3-824d-215d1a05104a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViOGQyYjEyLTIxZTgtNDkzMS04YTZkLWZiOWVjZGQ2MDM4M1wvZGNtczhpbC03YmZiMWQ3Ni1kNjNhLTQ1ZTMtODI0ZC0yMTVkMWEwNTEwNGEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VTtpbMhkA1zbs8-xxR24JNWupxn0xCLFK_m-lcw1Jnw
        //https://www.deviantart.com/metropolis-hero1125/art/Avengers-Endgame-Thor-PNG-763863069
		}
		
	
		if (x == 3){
		document.getElementById("avenger-name").innerHTML = "Avenger: Iron Man";
		document.getElementById("avenger-enemey").innerHTML = "Enemy: Obadiah Stane";
		document.getElementById("movie").innerHTML = "First Movie: Iron Man(2008)";
		document.getElementById("avenger-image").innerHTML =  '<img src="images/ironman.png" alt="iron" height="300">';
		// image source:https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b8d2b12-21e8-4931-8a6d-fb9ecdd60383/dc5rmwg-2249ecd6-106c-4a27-9198-f640dfc658cf.png/v1/fill/w_596,h_1280,strp/avengers_infinity_war_iron_man_png_by_metropolis_hero1125_dc5rmwg-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzViOGQyYjEyLTIxZTgtNDkzMS04YTZkLWZiOWVjZGQ2MDM4M1wvZGM1cm13Zy0yMjQ5ZWNkNi0xMDZjLTRhMjctOTE5OC1mNjQwZGZjNjU4Y2YucG5nIiwid2lkdGgiOiI8PTU5NiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.r47mQe2jgaFMHSk-osZpaXjs6FRth2hZe9cXY63CuDk
        //https://www.deviantart.com/metropolis-hero1125/art/Avengers-Infinity-War-Iron-Man-PNG-735281584
		}
		
	
		if (x == 4){
		document.getElementById("avenger-name").innerHTML = "Avenger: Doctor Strange";
		document.getElementById("avenger-enemey").innerHTML = "Baron Karl Amadeus Mordo"; 
		document.getElementById("movie").innerHTML = "Doctor Strange(2016)";
		document.getElementById("avenger-image").innerHTML = '<img src="images/doctorstrange.png" alt="doc" height="300">';
		// image source:https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b8d2b12-21e8-4931-8a6d-fb9ecdd60383/dc5rnfr-0036fdf6-1413-417f-a71c-5a02e8bacbc2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViOGQyYjEyLTIxZTgtNDkzMS04YTZkLWZiOWVjZGQ2MDM4M1wvZGM1cm5mci0wMDM2ZmRmNi0xNDEzLTQxN2YtYTcxYy01YTAyZThiYWNiYzIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-G8wa_UyEnNFKLEqSUudWTB7zrhf0-tPELKeLZFv4HA
        //https://www.deviantart.com/metropolis-hero1125/art/Avengers-Infinity-War-Doctor-Strange-PNG-735282279
		}
		
	}
