//require('../src/data.js');


//describe('example', () => {
//  it('is a function', () => {
//    expect(typeof example).toBe('function');
//  });

//  it('returns `example`', () => {
//    expect(example()).toBe('example');
//  });
//});

// require('../src/main.js');
// import MockFirebase from '../_mocks_/firebase.mock.js';
// global.firebase = MockFirebase();

import MockFirebase from 'mock-cloud-firestore';
const fixtureData = {
  __collection__: {
    users: {
      __doc__: {
        user_a: {
          email: 'test@test.la',
          username: 'user_a'
                }
              }
            }
          }
        },

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import { verify } from '../src/main.js';

const firebase =
describe('verify', () => {
  it('Debe verificar el usuario al enviar correo de confirmacion noreply@test.firebaseapp.com al correo del usuario test@test.la', () => {
    return verify('test@test.la').then((user) => {
      expect(user).toBe('el usuario fue verificado');
    });
  });
});

//
// // __tests__/displayUser-test.js
// 'use strict';
//
// jest.mock('../fetchCurrentUser');
//
// test('displays a user after a click', () => {
//   // Set up our document body
//   document.body.innerHTML =
//     '<div>' +
//     '  <span id="username" />' +
//     '  <button id="button" />' +
//     '</div>';
//
//   // This module has a side-effect
//   require('../displayUser');
//
//   const $ = require('jquery');
//   const fetchCurrentUser = require('../fetchCurrentUser');
//
//   // Tell the fetchCurrentUser mock function to automatically invoke
//   // its callback with some data
//   fetchCurrentUser.mockImplementation(cb => {
//     cb({
//       fullName: 'Johnny Cash',
//       loggedIn: true,
//     });
//   });
//
//   // Use jquery to emulate a click on our button
//   $('#button').click();
//
//   // Assert that the fetchCurrentUser function was called, and that the
//   // #username span's inner text was updated as we'd expect it to.
//   expect(fetchCurrentUser).toBeCalled();
//   expect($('#username').text()).toEqual('Johnny Cash - Logged In');
// });
