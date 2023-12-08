import './CalcHistoryLi.scss'

export function CalcHistoryLi({ value }) {
	return (
		<li className='calc__item'>
			{value.displayValue} = <b>{value.result}</b>
		</li>
	)
}
