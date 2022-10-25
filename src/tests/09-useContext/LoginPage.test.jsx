import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../09-useContext/context/UserContext";
import { LoginPage } from "../../09-useContext/LoginPage";

describe('prueba de <LoginPage /> ', () => { 
    
    test('should mostrar el componente sin el usuario', () => { 
        
        render(
            <UserContext.Provider value={{ user: null}}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); //aria-label
        expect(preTag.innerHTML).toBe('null');        
     });

     test('should llamar el setUser cuando se hace click en el boton', () => { 

        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const buttonElement = screen.getByRole('button');
        fireEvent.click( buttonElement );

        expect( setUserMock ).toHaveBeenCalledWith( {"email": "lechu@gmail.com", "id": 321, "name": "Josias Gana"} );
        
    });

 });