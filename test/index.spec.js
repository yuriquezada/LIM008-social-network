// importamos la funcion que vamos a testear

// configurando firebase mock
import { MockFirebase, MockFirestore, MockFirebaseSdk } from 'firebase-mock';
const mockauth = new MockFirebase();
const mockfirestore = new MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = MockFirebaseSdk(
  // use null if your code does not use RTDB
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
  () => mockfirestore
);

// iniciando tests
import { logIn } from "../src/lib/firebase.js";

describe('logIn', () => {
  it('debería ser una función', () => {
    expect(typeof logIn).toBe('function');
  });
  it('deberia verificar que el usuario exista en la base de datos', ()=>{
    return logIn('brenda.sd.15@gmail.com', '123123')
      .then((user)=>{
       expect(user.email).toBe('brenda.sd.15@gmail.com')
      })
  })
});
/* describe('lista de notas', () => {
  it('Debería poder iniciar sesion', () => {
    return logIn('brenda.sd.15@gmail.com', '123123')
      .then((user) => {
        expect(user.email).toBe('brenda.sd.15@gmail.com')
      })
  }); */
// })