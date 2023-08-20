import { authReducer } from '../../../src/auth/context/AuthReducer';
import { types } from '../../../src/auth/types/types';

describe('Pruebas en AuthReducer.js', () => {
  test('Debe de retornar el estado por defecto ', () => {
    const newAuth = authReducer({ logged: false }, {});

    expect(newAuth).toEqual({ logged: false });
  });
  test('Debe de (login) llamar el login autenticar y establecer el user', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'Jhon Palacios',
        id: 'ABC',
      },
    };
    const newAuth = authReducer({ logged: false }, action);

    expect(newAuth).toEqual({
      logged: true,
      user: action.payload,
    });
  });
  test('Debe de (logout) borrar el name del usuario y logged en false ', () => {
    const state = {
      logged: true,
      user: {name:'Jhon Palacios', id: 'ABC'}
    };
    const action = {
      type: types.logout,
      payload: {
        logged: false,
      },
    };
    const newAuth = authReducer(state, action);

    expect(newAuth).toEqual({logged: false});
  });
});
