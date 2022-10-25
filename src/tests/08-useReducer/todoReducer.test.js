import { todoReducer } from "../../08-useReducer/todoReducer";

describe('prueba en todoReducer', () => { 

    const initialState = [{
        id: 1,
        description: 'Demo todo',
        done: false
    }];
    
    test('should regresar el estado inicial', () => { 
        
        const newState = todoReducer( initialState, {} );
        expect( newState ).toBe( initialState );

     });

     test('should agregar un todo', () => { 
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Todo 2',
                done: false
            }
        }

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( action.payload );

      });

      test('should eliminar un todo', () => { 
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        };

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 0 );

      });

      
      test('should toggle un todo', () => { 
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        };

        const newState = todoReducer( initialState, action );
        expect( newState[0].done ).toBe(true);

        const newState2 = todoReducer( newState, action );
        expect( newState2[0].done ).toBe(false);

      });


 })