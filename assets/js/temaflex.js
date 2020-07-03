//OSNOVNOE BEZ NEGO NE KAK A TI IDI V PEN
//by TemaFlux.tk
//var max = 8
function muteCheck() {
    if ($["session"]["get"]("mute") !== "false") {
        audio["volume"] = 0
    } else {
        $("pre")["removeClass"]("fa-volume-off")["addClass"]("fa-volume-up")
    }
}
function mute() {
    if (audio["volume"] >= 0.9) {
        $("pre")["removeClass"]("fa-volume-up")["addClass"]("fa-volume-off");
        for (var sound = 0.9; sound > 0; sound = sound - 0.1) {
            sleep(39);
            audio["volume"] = sound
        };
        $["session"]["set"]("mute", "true")
    } else {
        rand(false, 0, true);
        $("pre")["removeClass"]("fa-volume-off")["addClass"]("fa-volume-up");
        for (var sound = 0; sound < 1; sound = sound + 0.1) {
            audio["volume"] = sound;
            sleep(39)
        };
        $["session"]["set"]("mute", "false")
    };
    delete sound
}
function sleep(_0x2778x8) {
    _0x2778x8 += new Date()["getTime"]();
    while (new Date() < _0x2778x8) {}
}
function rand(_0x2778x12 = false, rand = 0, _0x2778x13 = false) {
    if (statusBut) {
        if (_0x2778x12 == false) {
            $["session"]["set"]("mute", "false");
            $("pre")["removeClass"]("fa-volume-off")["addClass"]("fa-volume-up")
        };
        scrollOne["scrollAmount"] = 500;
        scrollTwo["scrollAmount"] = 500;
        if (rand == 0) {
            rand = randCashe
        };
        if (_0x2778x13) {
            rand = video["src"]["split"]("y/")[1]["split"](".")[0]
        };
        $["session"]["set"]("id", rand);
        var _0x2778x14 = "/beauty/" + rand + ".mp4";
        var _0x2778x15 = "/beauty/" + rand + ".mp3";
        video["src"] = _0x2778x14;
        for (var sound = 0.9; sound > 0; sound = sound - 0.1) {
            sleep(39);
            audio["volume"] = sound
        };
        audio["volume"] = 1;
        audio["src"] = _0x2778x15;
        video["oncanplay"] = function() {
            audio["play"]();
            scrollOne["scrollAmount"] = 100;
            scrollTwo["scrollAmount"] = 100;
            randCashe = randomInt(1, max, rand);
            preLoadVideo["src"] = "/beauty/" + randCashe + ".mp4";
            preLoadVideo["oncanplay"] = function() {
                stop()
            };
            preLoadAudio["src"] = "/beauty/" + randCashe + ".mp3"
        };
        if (!_0x2778x13) {
            document["getElementById"]("rand")["style"]["opacity"] = 0.1;
            document["getElementById"]("rand")["style"]["cursor"] = "no-drop";
            statusBut = false;
            setTimeout(function() {
                document["getElementById"]("rand")["style"]["cursor"] = "";
                document["getElementById"]("rand")["style"]["opacity"] = 1;
                statusBut = true
            }, 3000)
        }
    }
}
statusBut = true;
function randomInt(_0x2778xd, _0x2778xe, _0x2778xf = rand) {
    var _0x2778x10;
    while (true) {
        if ((_0x2778x10 = Math["floor"](Math["random"]() * (_0x2778xe - _0x2778xd + 1)) + _0x2778xd) != _0x2778xf) {
            return _0x2778x10
        }
    }
}
randCashe = randomInt(1, max)

//MOE VERMMYA UKRAINE
			function clock() {
				//Save the times in variables
				var meridiem = "";
				var today = new Date();
				var hours = today.getHours();
				var minutes = today.getMinutes();
				var seconds = today.getSeconds();
				var month = today.getMonth();
				var day = today.getDate();
				var year = today.getFullYear();
				var monthNames = ["JAN.", "FEB.", "MAR.", "APR.", "MAY.", "JUN.", "JUL.", "AUG.", "SEP.", "OCT.", "NOV.", "DEC."];
				//Set the AM or PM time
				if (hours >= 12) {
					meridiem = "PM";
				}
				else {
					meridiem = "AM";
				}
				//convert hours to 12 hour format and put 0 in front
				if (hours > 12) {
					hours = hours - 12;
				}
				else if (hours === 0) {
					hours = 12;
				}
				//Put 0 in front of single digit minutes and seconds
				if (minutes < 10) {
					minutes = "0" + minutes;
				}
				else {
					minutes = minutes;
				}
				if (seconds < 10) {
					seconds = "0" + seconds;
				}
				else {
					seconds = seconds;
				}
				document.getElementById("clock").innerHTML = (meridiem  + " " + hours + ":" + minutes);
				document.getElementById("date").innerHTML = (monthNames[month] + " " + day + " " + year);
			}
			setInterval('clock()', 1);
//G.R.A.T.E.M.A
	function gravityBackgroundEffect() {
			
			function Constellation (canvas, options) {
				
				var screenpointSplitt = 14000,
					movingSpeed = 0.2,
					viewportWidth = $(".hero .level-1").width(),
					viewportHeight = $(".hero .level-1").height(),
					nbCalculated = Math.round(viewportHeight*viewportWidth/screenpointSplitt),
					$canvas = $(canvas),
					context = canvas.getContext("2d"),
					defaults = {
						star: {color: "rgba(255, 255, 255, .65)",width: 1},
						line: {color: "rgba(255, 255, 255, .65)",width: 0.2},
						position: {x: 0,y: 0},
						width: viewportWidth,
						height: viewportHeight,
						velocity: movingSpeed,
						length: nbCalculated,
						distance: 120,
						radius: 200,
						stars: []
					},
					
					config = $.extend(true, {}, defaults, options);
		
				function Star () {
					
					this.x = Math.random() * canvas.width;
					this.y = Math.random() * canvas.height;
		
					this.vx = (config.velocity - (Math.random() * 0.5));
					this.vy = (config.velocity - (Math.random() * 0.5));
		
					this.radius = Math.random() * config.star.width;
					
				}
		
				Star.prototype = {
				
					create: function(){
						
						context.beginPath();
						context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
						context.fill();
						
					},
		
					animate: function(){
						
						var i;
						for (i = 0; i < config.length; i++) {
		
							var star = config.stars[i];
		
							if (star.y < 0 || star.y > canvas.height) {
								
								star.vx = star.vx;
								star.vy = - star.vy;
								
							} else if (star.x < 0 || star.x > canvas.width) {
								
								star.vx = - star.vx;
								star.vy = star.vy;
								
							}
		
							star.x += star.vx;
							star.y += star.vy;
						}
						
					},
		
					line: function(){
						
						var length = config.length,
							iStar,
							jStar,
							i,
							j;
		
						for (i = 0; i < length; i++) {
							
							for (j = 0; j < length; j++) {
								
								iStar = config.stars[i];
								jStar = config.stars[j];
		
								if (
								
									(iStar.x - jStar.x) < config.distance &&
									(iStar.y - jStar.y) < config.distance &&
									(iStar.x - jStar.x) > - config.distance &&
									(iStar.y - jStar.y) > - config.distance
									
								) {
									if (
									
										(iStar.x - config.position.x) < config.radius &&
										(iStar.y - config.position.y) < config.radius &&
										(iStar.x - config.position.x) > - config.radius &&
										(iStar.y - config.position.y) > - config.radius
										
									) {
										
										context.beginPath();
										context.moveTo(iStar.x, iStar.y);
										context.lineTo(jStar.x, jStar.y);
										context.stroke();
										context.closePath();
										
									}
									
								}
								
							}
							
						}
						
					}
					
				};
	
				this.createStars = function () {
					
					var length = config.length,
						star,
						i;
					
					context.clearRect(0, 0, canvas.width, canvas.height);
		
					for (i = 0; i < length; i++) {
						
						config.stars.push(new Star());
						star = config.stars[i];
		
						star.create();
						
					}
					
					star.line();
					star.animate();
					config.stars.splice(length, length);
					
				};
		
				this.setCanvas = function () {
					
					canvas.width = config.width;
					canvas.height = config.height;
					
					context.fillStyle = config.star.color;
					context.strokeStyle = config.line.color;
					context.lineWidth = config.line.width;
					
					if (!options || !options.hasOwnProperty("position")) {
						
						config.position = {
							
							x: canvas.width * 0.5,
							y: canvas.height * 0.5
							
						};
						
					}
					
				};
		
				this.loop = function (callback) {
					
					callback();
		
					window.requestAnimationFrame(function () {
	  			
						this.loop(callback);
						
					}.bind(this));
					
				};
		
				this.bind = function () {
					
					$(window).on("mousemove", function(e){
						
						config.position.x = e.pageX - $canvas.offset().left;
						config.position.y = e.pageY - $canvas.offset().top;
						
					});
					
				};
		
				this.init = function () {
					
					this.setCanvas();
					this.loop(this.createStars);
					this.bind();
				};
				
			}
		
			$.fn.constellation = function (options) {
				
				return this.each(function () {
					
					var c = new Constellation(this, options);
					c.init();
					
				});
				
			};
		
		
			$("#canvas canvas").constellation({});
		
	  
		
		var waitForFinalEvent = (function () {
			
		  var timers = {};
		  
		  return function (callback, ms, uniqueId) {
			  
			if (!uniqueId) {
			  uniqueId = "Don't call this twice without a uniqueId";
			}
			
			if (timers[uniqueId]) {
			  clearTimeout (timers[uniqueId]);
			}
			
			timers[uniqueId] = setTimeout(callback, ms);
			
		  };
		  
		})();
		
		$(window).resize(function () {
			
			waitForFinalEvent(function(){
					$("#canvas canvas").constellation({});
			}, 500, "some unique string");
			
		});
		
		
		
	}
