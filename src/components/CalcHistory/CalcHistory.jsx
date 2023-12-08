import './CalcHistory.scss'
import { CalcHistoryLi } from '../CalcHistoryLi/CalcHistoryLi'

export function CalcHistory({ viewHistory, datahistory, onClick }) {
	return (
		<>
			<button onClick={onClick} className='calc__btn--history'>
				Historia
			</button>
			{viewHistory && (
				<ul className='calc__list'>
					{datahistory.map((item, index) => {
						return <CalcHistoryLi key={index} value={item}/>
					})}
				</ul>
			)}
		</>
	)
}