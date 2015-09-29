var 	expect = require('chai').expect,
			media = require('../../src/media');
			Browser = require('zombie');



var browser = new Browser();

before(function(done){
	browser.visit('http://localhost:3000', done);
});

describe('Media Object', function(){

	// INITIAL MEDIA MODULE. 
	describe('after instantiation', function(){

		it('audio element should exist on page', function(){
			expect(browser.queryAll('#audio')).to.be.ok;
		});

		it('should be an object', function(){
			expect(media).to.be.an("object");
		});

		it('should have a "has" & "is" function', function(){
			var has = media.has,
					is 	= media.is;

			expect(has).to.be.a('function');
			expect(is).to.be.a('function');
		});

		it('should have a "play", "pause", and "toggle" function', function(){ 
			var play = media.play,
					pause = media.pause,
					toggle = media.toggle

			expect(play).to.be.a('function');
			expect(pause).to.be.a('function');
			expect(toggle).to.be.a('function');
		});

		it('should have a "prop" function', function(){
			var prop = media.prop;

			expect(prop).to.be.a('function');
		});

		it('should have a "perform" function', function(){
			var perform = media.perform;

			expect(perform).to.be.a('function');
		});

		it('window should have a media object.', function(){
			expect(browser.window.media).to.be.ok;
		});

	});
});
