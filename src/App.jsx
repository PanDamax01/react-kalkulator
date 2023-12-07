import { evaluate } from 'mathjs'
import { convertX } from './utils/convertX.js'
import { shouldSkipOperation } from './utils/shouldSkipOperation.js'
import { useState } from 'react'
import './App.scss'
import { Button } from './components/Button/Button'

function App() {
	const [displayValue, setDisplayValue] = useState('')

	const CalculatorButtons = [
		{
			value: 'C',
			onClick: handleClearClick,
			className: 'calc__btn calc__btn--clear',
		},
		{
			value: '^',
			onClick: handleOperationClick,
			className: 'calc__btn calc__btn--operation',
		},
		{
			value: '%',
			onClick: handleOperationClick,
			className: 'calc__btn calc__btn--operation',
		},
		{
			value: '+',
			onClick: handleOperationClick,
			className: 'calc__btn calc__btn--operation',
		},
		{ value: '7', onClick: handleNumberClick, className: 'calc__btn' },
		{ value: '8', onClick: handleNumberClick, className: 'calc__btn' },
		{ value: '9', onClick: handleNumberClick, className: 'calc__btn' },
		{
			value: '-',
			onClick: handleOperationClick,
			className: 'calc__btn calc__btn--operation',
		},
		{ value: '4', onClick: handleNumberClick, className: 'calc__btn' },
		{ value: '5', onClick: handleNumberClick, className: 'calc__btn' },
		{ value: '6', onClick: handleNumberClick, className: 'calc__btn' },
		{
			value: 'x',
			onClick: handleOperationClick,
			className: 'calc__btn calc__btn--operation',
		},
		{ value: '1', onClick: handleNumberClick, className: 'calc__btn' },
		{ value: '2', onClick: handleNumberClick, className: 'calc__btn' },
		{ value: '3', onClick: handleNumberClick, className: 'calc__btn' },
		{
			value: '/',
			onClick: handleOperationClick,
			className: 'calc__btn calc__btn--operation',
		},
		{
			value: '.',
			onClick: handleOperationClick,
			className: 'calc__btn calc__btn--operation',
		},
		{ value: '0', onClick: handleNumberClick, className: 'calc__btn' },
		{
			value: '=',
			onClick: handleEqualClick,
			className: 'calc__btn calc__btn--operation',
		},
	]
	const ops = ['^', '%', '/', 'x', '+', '-', '.']

	function handleNumberClick(e) {
		if (displayValue.length >= 18) return
		setDisplayValue((prevValue) => prevValue + e.target.textContent)
	}

	function handleOperationClick(e) {
		// if (displayValue.length === 0 && ops.includes(e.target.textContent) && e.target.textContent !== '-') return
		// if(displayValue[0] === '-' && displayValue.length === 1) return
		// if (e.target.textContent === '.' && /\.\d+$/.test(displayValue)) return
		// if (displayValue.length >= 18) return
		if (shouldSkipOperation(displayValue, e.target.textContent, ops)) return

		if (ops.includes(displayValue.slice(-1))) {
			setDisplayValue(
				(prevValue) => prevValue.slice(0, -1) + e.target.textContent
			)
		} else {
			handleNumberClick(e)
		}
	}

	function handleEqualClick() {
		if (
			displayValue.length === 0 ||
			(ops.includes(displayValue.slice(-1)) && displayValue.slice(-1) !== '%')
		)
			return
		if (displayValue.includes('/0') && !displayValue.includes('/0.')) {
			return setDisplayValue('Nie dziel przez zero')
		}
    
		setDisplayValue(evaluate(convertX(displayValue)).toString())
	}

	function handleClearClick() {
		setDisplayValue('')
	}

	return (
		<div className='calc'>
			<div className='calc__display'>{displayValue}</div>
			<div className='calc__box'>
				{CalculatorButtons.map((button, index) => {
					return (
						<Button
							key={index}
							className={button.className}
							onClick={button.onClick}>
							{button.value}
						</Button>
					)
				})}
			</div>
		</div>
	)
}

export default App
