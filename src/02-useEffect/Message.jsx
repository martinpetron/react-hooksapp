import { useEffect, useState } from "react"

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0});


    useEffect(() => {
        //   console.log('Message Mounted');
            
        //creo un listener
        const onMouseMove = ( { x, y } ) => {
            setCoords({ x, y })
        }

        window.addEventListener( 'mousemove', onMouseMove );
    
      return () => {
        // console.log('Message Unmounted');

        //elimino el listener
        window.removeEventListener( 'mousemove', onMouseMove );

      }
    }, []) //si se pone [] es para que el useeffect se utilice una sola vez cuando el componente se renderiza

    

  return (
    <>
        <h3>Usuario ya existe</h3>
        { JSON.stringify( coords ) }
    </>
  )
}
