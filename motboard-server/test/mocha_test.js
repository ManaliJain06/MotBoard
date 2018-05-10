/**
 * New node file
 */
var request = require('request'), express = require('express'), assert = require("assert"), http = require("http");

describe('http tests', function() {

    // it('should return the login if the url is correct', function(done) {
    //     http.get('http://localhost:3300/', function(res) {
    //         assert.equal(400, res.statusCode);
    //         done();
    //     })
    // });
    //
    // it('should not return the home page if the url is wrong', function(done) {
    //     http.get('http://localhost:3300/test', function(res) {
    //         assert.equal(404, res.statusCode);
    //         done();
    //     })
    // });

    // it('No user in the session', function(done) {
    //     var userdata= {};
    //     request.get('http://localhost:3300/getuserboards'
    //     ,function(error, response, body) {
    //     true
    //         assert.equal(400, response.status);
    //         done();
    //
    //
    //     });
    // });
    //
    // it('SHOULD NOT LOGIN', function(done) {
    //     request.post('http://localhost:3300/users/doLogin', {
    //
    //         form:{
    //             email : 'sanju',
    //             password:'14'
    //         }
    //     }, function(error, response, body) {
    //         assert.equal(401, response.statusCode);
    //         done();
    //     });
    // });
    // it('ACCOUNT CREATED', function(done) {
    //     request.post('http://localhost:3001/usigin', {
    //
    //         form:{
    //             email : 'madhutest',
    //             password:'madhutest',
    //             firstname:'madhutest',
    //             password:'madhutest'
    //         }
    //     }, function(error, response, body) {
    //         assert.equal(401, response.statusCode);
    //         done();
    //     });
    // });
    // it('ACCOUNT NOT CREATED', function(done) {
    //     request.post('http://localhost:3300/doSignup', {
    //
    //         form:{
    //             email : 'madhutest',
    //             password:'mad',
    //             firstname:'mad',
    //             lastname:'asd'
    //         }
    //     }, function(error, response, body) {
    //         assert.equal(401, response.statusCode);
    //         done();
    //     });
    // });
});