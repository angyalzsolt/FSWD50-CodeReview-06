//basic class

class General {
	city: string;
	name: string;
	zipcode: number;
	address: string;
	img: string;
	date: string;
	constructor(city: string, name: string, zipcode: number, address: string, img: string, date: string){
		this.city = city;
		this.name = name;
		this.zipcode = zipcode;
		this.address = address;
		this.img = img;
		this.date = date
	};
	render(){
		return `<div class="col-lg-3 col-md-6 col-sm-12" id="what">
					<div class="city">
						<p>${this.city}</p>
					</div>
					<div class="name">
						<p>${this.name}</p>
					</div>		
					<div class="zipcode">
						<p>${this.zipcode}</p>
					</div>	
					<div class="address">
						<p>${this.address}</p>
					</div>	
					<div class="img">
						<img src="${this.img}">
					</div>
					<div class="date">
						<p>${this.date}</p>
					</div>`	

	}
}
// extend basic, add restaurant
class Restaurant extends General{
	telnum: number;
	type: string;
	webad: string;
	constructor(city: string, name: string, zipcode: number, address: string, img: string, date: string, telnum: number, type: string, webad: string){
		super(city, name, zipcode, address, img, date);
		this.telnum = telnum;
		this.type = type;
		this.webad = webad;
	};
	renderRes(){
		return `${super.render()}
				<div class="telnum">
					<p>Tel.num: ${this.telnum}</p>
				</div>
				<div class="type">
					<p>Style: ${this.type}
				</div>
				<div class="webad">
					<a href="${this.webad}">${this.webad}</a>
				</div>
			</div>`			

	}
}


var res1 = new Restaurant("Budapest", "Costes", 1124, "Ráday street 4.", "img/res1.jpg", "2017.12.01", 3612190696 , "Michelin-star", "http://www.costes.hu/intro.html");
var res2 = new Restaurant("Budapest", "Onyx", 1051, "Vörösmarty square 7.", "img/res2.jpg", "2016.03.24", 305080522, "Michelin-star", "http://onyxrestaurant.hu/");
var res3 = new Restaurant("Encs", "Spíler", 3860, "Petőfi street 57", "img/res3.jpg", "2018.09.10", 123423434, "Traditional", "http://www.anyukammondta.hu/");
var res4 = new Restaurant("Balatonszemes", "Kistücsök", 8636, "Bajcsy-Zsilinkszky street 25", "img/res4.jpg", "2016.10.5", 84360133, "Hungarian", "http://kistucsok.hu/");
//array of restaurants
var allres = [res1, res2, res3, res4];

for (let x of allres){
	$("#first").append(x.renderRes())
}
//extend basic, add events
class Events extends General{
	size: string;
	music: string;
	price: number;
	constructor(city: string, name: string,  zipcode: number, address: string, img: string, date: string, size: string, music: string, price: number){
		super(city, name, zipcode, address, img, date);
		this.size = size;
		this.music = music;
		this.price = price;
	};
	renderEv(){
		return `${super.render()}
				<div class="size">
					<p>Size: ${this.size} people</p>
				</div>
				<div class="music">
					<p>Style: ${this.music}</p>
				</div>
				<div class="price">
					<p>Price: ${this.price} EUR</p>
				</div>
			</div>`			
	}

}

var ev1 = new Events("Barcelona", "El Clasico", 08028 , "C. d'Aristides Maiillol 12", "img/ev1.jpg", "2018.09.10", "90.000", "Sport", 100);
var ev2 = new Events("Budapest", "Metalica", 1013, "Papp László Sportarena", "img/ev2.jpg", "2018.07.22", "30.000", "Rock/Metal", 70);
var ev3 = new Events("Budapest", "Boris Brejcha", 1013, "Budapest Park", "img/ev3.jpg", "2015.10.10",  "12.000", "Techno", 50);
var ev4 = new Events("Budapest", "Droplex", 1013, "Akvárium Club", "img/ev4.jpg", "2017.09.10", "2.000", "Minimal", 25);
//array of events
var allev = [ev1, ev2, ev3, ev4];

for(let x of allev){
	$("#second").append(x.renderEv());
};

/*
//extend basic, add adventures
class Adventure extends General{
	purpose: string;
	price: number;
	constructor(city: string, name: string zipcode: number, address: string, img: string, date: string, purpose: string, price: number){
		super(city, name, zipcode, address, img, date)
		this.purpose = purpose;
		this.price = price;
	}
	renderAdv(){
		return `${super.render()}
				<div class="purpose">
					<p>${this.purpose}</p>
				</div>
				<div class="price">
					<p>${this.price}</p>
				</div>
			</div>`

	}
}

var adv1 = new Adventure("Budapest", "asdds" 1013, "Váci Mihly 25", "https://via.placeholder.com/200x150", "2012.01.14", "steak with rice", 123);
var adv2 = new Adventure("Budapest", "asdds" 1013, "Váci Mihly 25", "https://via.placeholder.com/200x150", "2015.04.20",  "steak with rice", 123);
var adv3 = new Adventure("Budapest", "asdds" 1013, "Váci Mihly 25", "https://via.placeholder.com/200x150", "2009.12.16", "steak with rice", 123);
var adv4 = new Adventure("Budapest", "asdds" 1013, "Váci Mihly 25", "https://via.placeholder.com/200x150", "2005.09.22", "steak with rice", 123);
//array of adventures
var alladv = [adv1, adv2, adv3, adv4]

for(let x of alladv){
	$("#third").append(x.renderAdv());
};




const d: Date = new Date();

*/
/*var h = [];
for(let x of alladv){
	let y = x.date.split(".");
	h.push(y)
	}
console.log(h)
for(let k of h){
	console.log(k)
	for( let t of k){
		console.log(Number(t))
	}
}*/