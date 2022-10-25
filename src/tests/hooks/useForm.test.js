import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../hooks/useForm";

describe('pruebas en useForm', () => { 
    
    const initialForm = {
        name: 'Martin',
        mail: 'martin@gmail.com'
    }
    
    test('should regresar los valores por defecto', () => { 
        
        const { result } = renderHook( () => useForm(initialForm) );
        // console.log(result.current);
        expect(result.current).toEqual( {
            name: initialForm.name,
            mail: initialForm.mail,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
          } );

     });

     test('should cambiar el nombre del formulario', () => { 

        const newValue = 'Juan'
        
        const { result } = renderHook( () => useForm(initialForm) );
        const { onInputChange } = result.current;

        act( () => {
            onInputChange({ target: { name: 'name', value: newValue } });
        });

        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);

      });

      test('should realizar el reset del form', () => { 

        const newValue = 'Juan'
        
        const { result } = renderHook( () => useForm(initialForm) );
        const { onResetForm, onInputChange } = result.current;

        act( () => {
            onInputChange({ target: { name: 'name', value: newValue } });
            onResetForm();
        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);

      })

 });