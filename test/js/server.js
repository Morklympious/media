var 	expect = require('chai').expect,
			Browser = require('zombie');



var browser = new Browser();

before(function(done){
	browser.visit('http://localhost:3000', done);
});

describe('Server', function(){
	it('should have a body element', function(){
		expect(browser.body).to.be.ok;
	})

	it('should have a location property', function(){
		expect(browser.location).to.be.ok;
	})
})
