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
    posts: {
      __doc__: {
        abc123: {
          post: 'holi',
          username: 'user_a',
          date: '00-00-0000'
                }
              }
            }
          }
        },

firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import { renderPost } from '../src/main1.js';

describe('renderPost', () => {
  it('Debería agregar un post', () => {
    return renderPost('texto publicado').then((data) => {
      const callback = (posts) => {
        const result = posts.find((element) => {
          return element.post === 'texto publicado';
        })
        expect(result.post).toBe('texto publicado');
      }
    });
  });
});
