// importamos la funcion que vamos a testear

// configurando firebase mock
const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
  () => mockfirestore
);

// iniciando tests
import { signIn } from "../src/lib/firebase.js";

describe('signIn', () => {
  it('debería ser una función', () => {
    expect(typeof signIn).toBe('function');
  });
});
describe('lista de notas', () => {
  it('Debería poder iniciar sesion', () => {
    return signIn('brenda.sd.15@gmail.com', '123123')
      .then((user) => {
        expect(user.email).toBe('brenda.sd.15@gmail.com')
      })
  });
})