export function shouldSkipOperation(displayValue, buttonText, ops) {
	const dotRegex = /\.\d+$/

	return (
		(displayValue.length === 0 &&
			ops.includes(buttonText) &&
			buttonText !== '-') ||
		(displayValue[0] === '-' && displayValue.length === 1) ||
		(buttonText === '.' && dotRegex.test(displayValue)) ||
		displayValue.length >= 18 ||
		!displayValue[displayValue.length - 1].match(/\d/) && buttonText === '.'
	)
}
