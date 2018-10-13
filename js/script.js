//basic class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var General = /** @class */ (function () {
    function General(city, name, zipcode, address, img, date) {
        this.city = city;
        this.name = name;
        this.zipcode = zipcode;
        this.address = address;
        this.img = img;
        this.date = date;
    }
    ;
    General.prototype.render = function () {
        return "<div class=\"col-lg-3 col-md-6 col-sm-12\" id=\"what\">\n\t\t\t\t\t<div class=\"city\">\n\t\t\t\t\t\t<p>" + this.city + "</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"name\">\n\t\t\t\t\t\t<p>" + this.name + "</p>\n\t\t\t\t\t</div>\t\t\n\t\t\t\t\t<div class=\"zipcode\">\n\t\t\t\t\t\t<p>" + this.zipcode + "</p>\n\t\t\t\t\t</div>\t\n\t\t\t\t\t<div class=\"address\">\n\t\t\t\t\t\t<p>" + this.address + "</p>\n\t\t\t\t\t</div>\t\n\t\t\t\t\t<div class=\"img\">\n\t\t\t\t\t\t<img src=\"" + this.img + "\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"date\">\n\t\t\t\t\t\t<p>" + this.date + "</p>\n\t\t\t\t\t</div>";
    };
    return General;
}());
// extend basic, add restaurant
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(city, name, zipcode, address, img, date, telnum, type, webad) {
        var _this = _super.call(this, city, name, zipcode, address, img, date) || this;
        _this.telnum = telnum;
        _this.type = type;
        _this.webad = webad;
        return _this;
    }
    ;
    Restaurant.prototype.renderRes = function () {
        return _super.prototype.render.call(this) + "\n\t\t\t\t<div class=\"telnum\">\n\t\t\t\t\t<p>Tel.num: " + this.telnum + "</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"type\">\n\t\t\t\t\t<p>Style: " + this.type + "\n\t\t\t\t</div>\n\t\t\t\t<div class=\"webad\">\n\t\t\t\t\t<a href=\"" + this.webad + "\">" + this.webad + "</a>\n\t\t\t\t</div>\n\t\t\t</div>";
    };
    return Restaurant;
}(General));
var res1 = new Restaurant("Budapest", "Costes", 1124, "Ráday street 4.", "img/res1.jpg", "2017.12.01", 3612190696, "Michelin-star", "http://www.costes.hu/intro.html");
var res2 = new Restaurant("Budapest", "Onyx", 1051, "Vörösmarty square 7.", "img/res2.jpg", "2016.03.24", 305080522, "Michelin-star", "http://onyxrestaurant.hu/");
var res3 = new Restaurant("Encs", "Spíler", 3860, "Petőfi street 57", "img/res3.jpg", "2018.09.10", 123423434, "Traditional", "http://www.anyukammondta.hu/");
var res4 = new Restaurant("Balatonszemes", "Kistücsök", 8636, "Bajcsy-Zsilinkszky street 25", "img/res4.jpg", "2016.10.5", 84360133, "Hungarian", "http://kistucsok.hu/");
//array of restaurants
var allres = [res1, res2, res3, res4];
for (var _i = 0, allres_1 = allres; _i < allres_1.length; _i++) {
    var x = allres_1[_i];
    $("#first").append(x.renderRes());
}
//extend basic, add events
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(city, name, zipcode, address, img, date, size, music, price) {
        var _this = _super.call(this, city, name, zipcode, address, img, date) || this;
        _this.size = size;
        _this.music = music;
        _this.price = price;
        return _this;
    }
    ;
    Events.prototype.renderEv = function () {
        return _super.prototype.render.call(this) + "\n\t\t\t\t<div class=\"size\">\n\t\t\t\t\t<p>Size: " + this.size + " people</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"music\">\n\t\t\t\t\t<p>Style: " + this.music + "</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"price\">\n\t\t\t\t\t<p>Price: " + this.price + " EUR</p>\n\t\t\t\t</div>\n\t\t\t</div>";
    };
    return Events;
}(General));
var ev1 = new Events("Barcelona", "El Clasico", 08028, "C. d'Aristides Maiillol 12", "img/ev1.jpg", "2018.09.10", "90.000", "Sport", 100);
var ev2 = new Events("Budapest", "Metalica", 1013, "Papp László Sportarena", "img/ev2.jpg", "2018.07.22", "30.000", "Rock/Metal", 70);
var ev3 = new Events("Budapest", "Boris Brejcha", 1013, "Budapest Park", "img/ev3.jpg", "2015.10.10", "12.000", "Techno", 50);
var ev4 = new Events("Budapest", "Droplex", 1013, "Akvárium Club", "img/ev4.jpg", "2017.09.10", "2.000", "Minimal", 25);
//array of events
var allev = [ev1, ev2, ev3, ev4];
for (var _a = 0, allev_1 = allev; _a < allev_1.length; _a++) {
    var x = allev_1[_a];
    $("#second").append(x.renderEv());
}
;
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
