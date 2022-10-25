import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../09-useContext/MainApp";

describe('pruebas en <MainApp/>', () => { 
    
    test('should mostrar el HomePage', () => { 
        
        render( 
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
        );

        expect( screen.getByText('HomePage') ).toBeTruthy();

     });

     test('should mostrar el LoginPage', () => { 
        
        render( 
            <MemoryRouter initialEntries={['/login']} >
                <MainApp/>
            </MemoryRouter>
        );

        expect( screen.getByText('LoginPage') ).toBeTruthy();

     });

 });