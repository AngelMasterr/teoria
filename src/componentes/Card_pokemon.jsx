import './card_pokemon.css'
const pokemon = [
	{
		id: 1,
		nombre: 'pikachu',
		imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
	},
	{
		id: 2,
		nombre: 'charmander',
		imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
	},
	{
		id: 3,
		nombre: 'bulbasaur',
		imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
	},
]

export function Card_pokemon() {
	return pokemon.map((item, index) => {
		return (
			<div div className="card" key={index}>
				<h1>{item.nombre}</h1>
				<img src={item.imagen} className="imagen" />
			</div>
		)
	})
}
