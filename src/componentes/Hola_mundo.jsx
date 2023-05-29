export function Datos_personales() {
    const datos = {
        nombre: 'Angel',
        edad: 34,
    };
    return (
        <div>
            <h1>HOLA MUNDO</h1>
            <h1>{datos.nombre}</h1>
            <h1>{datos.edad}</h1>
        </div>
    );
}
