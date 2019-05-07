import MockFirebase from 'mock-cloud-firestore';
import { showPost, getPost, deletePost, editPost, likePost } from '../src/lib/controller.js';

const fixtureData = {
  __collection__: {
    users: {
      __doc__: {
        abc1d: {
          comment: 'bye',
          reaction: 0,
          filter: 'publico',
        },
        abc123: {
            comment: 'hola mundo',
            reaction: 1,
            filter: 'privado',
      }
    }
  }
}
}

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

describe('showPost', () => {
    it('Deberia de poder agregar una post', (done) => {
      return showPost('hola mundo', 0, 'publico')
      .then((data) => {       
        const callback = (posts) => {
            console.log(posts)
        const result = posts.find((post) => {
            return post.comment === 'hola mundo'
        });
     expect(result.comment).toBe('hola mundo');
    done()
          }
          getPost(callback, 'brenda.sd.15@gmail.com')
        })
    })
})

describe('editPost', () => {
    it('Deberia de poder editar una post', (done) => {
      return editPost('abc123', 'hola baby')
      .then(() => {       
        const callback = (posts) => {
        const result = posts.find((post) => {
            return post.comment === 'hola baby'
        });
     expect(result.comment).toBe('hola baby');
    done()
          }
          getPost(callback, 'brenda.sd.15@gmail.com')
        })
    })
})

describe('likePost', () => {
    it('Deberia de poder eliminar una post', (done) => {
      return likePost('abc1d', 1)
      .then(() => {       
        const callback = (posts) => {
        const result = posts.find((post) => {
            return post.reaction === 1
        });
     expect(result.reaction).toBe(1);
    done()
          }
          getPost(callback, null)
        })
    })
})

describe('deletePost', () => {
    it('Deberia de poder eliminar una post', (done) => {
      return deletePost('abc123')
      .then(() => {       
        const callback = (posts) => {
        const result = posts.find((post) => {
            return post.id === 'abc123'
        });
     expect(result).toBe(undefined);
    done()
          }
          getPost(callback, 'brenda.sd.15@gmail.com')
        })
    })
})