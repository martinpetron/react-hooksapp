import { render, screen } from "@testing-library/react";
import { UserContext } from "../../09-useContext/context/UserContext";
import { HomePage } from "../../09-useContext/HomePage";

describe('pruebas en <HomePage /> ', () => { 

    const user = {
        id: 1,
        name: 'Martin',
        email: 'martin@gmail.com'
    }
    
    test('should mostrar el compenente sin el usuario', () => { 
        
        render(
            <UserContext.Provider value={{ user: null}}>
                <HomePage />
            </UserContext.Provider>
        );

        // screen.debug();

        const preTag = screen.getByLabelText('pre'); //aria-laber
        expect(preTag.innerHTML).toBe('null');

     });

     test('should mostrar el compenente con el usuario', () => { 
        
        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        );

        screen.debug();

        const preTag = screen.getByLabelText('pre'); //aria-laber
        expect(preTag.innerHTML).toContain( user.name );
        expect(preTag.innerHTML).toContain( `${user.id}` );

     });

 });