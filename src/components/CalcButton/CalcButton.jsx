import './CalcButton.scss'

export function CalcButton({ className, children, onClick }) {
	return (
		<button className={className} onClick={onClick}>
			{children}
		</button>
	)
}