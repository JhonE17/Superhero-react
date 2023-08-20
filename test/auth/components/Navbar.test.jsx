import { fireEvent, render, screen } from '@testing-library/react';
import { AuthContext, Navbar } from '../../../src/auth';
import { MemoryRouter, useNavigate } from 'react-router-dom';

const mockedUseNavigate = jest.fn()
jest.mock('react-router-dom', ()=> ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=> mockedUseNavigate
}))

describe('Pruebas en <Navbar/>', () => {
    const contxtValue ={
        logged: true,
        user: {
          name: 'Pepe',
          id: '123',
        },
        logout: jest.fn()
      };
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Debe de mostrar el nombre del usuario logeado', () => {
    render(
      <AuthContext.Provider value={contxtValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Pepe')).toBeTruthy();
  });
  test('Debe de llamar el logout y navigate cuando se hace click en el boton', () => {
      
        render(
          <AuthContext.Provider value={contxtValue}>
              <MemoryRouter initialEntries={['/marvel']}>
                  <Navbar/>
              </MemoryRouter>
          </AuthContext.Provider>
        )
        const logoutBtn = screen.getByRole('button')
        fireEvent.click(logoutBtn)

        
        expect(contxtValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {"replace": true});
  });
});
