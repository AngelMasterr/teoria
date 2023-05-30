import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { Datos_personales } from './componentes/Hola_mundo';
// import { Usuarios } from './componentes/Usuarios';
// import { Prueba } from './componentes/Prueba';
// import { Card } from './componentes/Card';
import { Card_pokemon } from './componentes/Card_pokemon'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		{/* <Datos_personales />
        <Prueba />
        <Usuarios
            nombre="angel"
            edad={34}
            direccion={{ calle: 'calle la libertad', ciudad: 'metropolis', pais: 'nunca jamas' }}
        />
        <Card estado={false} /> */}

		<Card_pokemon />
	</React.StrictMode>
)
