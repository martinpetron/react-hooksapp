import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../03-examples";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');

describe('pruebas en MultipleCustomHooks ', () => { 
    
    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({ 
        counter: 1,
        increment: mockIncrement
    });

    beforeEach( () => {
        jest.clearAllMocks();
    })
    
    test('should mostrar el componente por defecto', () => { 

        useFetch.mockReturnValue({ 
            data: null, 
            isLoading: true, 
            hasError:null 
        });

        render( <MultipleCustomHooks /> );

        expect( screen.getByText('Breaking Bad Quotes') );
        expect( screen.getByText('Loading...') );

        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        expect( nextButton.disabled ).toBeTruthy();

        // screen.debug();

     });

     test('should mostrar un quote', () => { 
        
        useFetch.mockReturnValue({ 
            data: [{ author: 'Martin', quote: 'Hola Mundo' }], 
            isLoading: false, 
            hasError:null 
        });

        render( <MultipleCustomHooks /> );
        expect(screen.getByText('Hola Mundo')).toBeTruthy();
        expect(screen.getByText('Martin')).toBeTruthy();

        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        expect( nextButton.disabled ).toBeFalsy();

      });

      test('should llamar la funcion de incrementar', () => { 


        useFetch.mockReturnValue({ 
            data: [{ author: 'Martin', quote: 'Hola Mundo' }], 
            isLoading: false, 
            hasError:null 
        });

        render( <MultipleCustomHooks /> );
        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();

       })


 })