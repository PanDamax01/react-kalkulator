import './Button.scss'

export function Button({ className, children, onClick }) {
	return (
		<button className={className} onClick={onClick}>
			{children}
		</button>
	)
}