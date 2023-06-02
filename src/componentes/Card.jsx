import './card.css'

export function Card({ estado }) {
	return (
		<div className="card">
			<h1>Mi primera carta</h1>
			<p className={estado ? 'on' : 'off'}>Detalle carta</p>
		</div>
	)
}
