import './CalcHistory.scss'
import { CalcHistoryLi } from '../CalcHistoryLi/CalcHistoryLi'

export function CalcHistory({ isHistoryShown, dataHistory, onClick }) {

	return (
		<>
			<button onClick={onClick} className='calc__btn--history'>
				Historia
			</button>

			{isHistoryShown && (
				<ul className='calc__list'>
					{dataHistory.map((operation) => {
						const key = `${operation.id}-${operation.displayValue}`
						return <CalcHistoryLi key={key} value={operation} />
					})}
				</ul>
			)}
		</>
	)
}
