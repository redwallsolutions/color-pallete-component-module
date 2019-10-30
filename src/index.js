import React, { useState } from 'react'
import { render } from 'react-dom'
import { createGlobalStyle } from 'styled-components'

import Colors from './lib'
import Color from 'color'

const ResetCSS = createGlobalStyle`
  * {
    padding:0;
    margin:0;
    box-sizing: border-box;
    color: rgb(68,68,68);
  }

  .container{
    min-height: 100vh;
  }

  .container .input-group {
    padding: 2em;
  }

`
const inputs = [
	'primary',
	'secondary',
	'_default',
	'primaryDark',
	'secondaryDark',
	'defaultDark',
	'primaryContrast',
	'secondaryContrast',
	'defaultContrast',
	'primaryContrastDark',
	'secondaryContrastDark',
	'defaultContrastDark'
]

function App() {
	const [backgroundColor, setBackgroundColor] = useState('rgb(250,250,250)')

	function changeColor(input) {
		setBackgroundColor(Colors[input.target.id])
	}

	function renderInputGroups(inputs) {
		return inputs.map((input, index) => {
			return (
				<div
					className="input-group"
					key={index}
					style={{ marginBottom: '1em' }}
				>
					<div>
						<label
							htmlFor={input}
							style={{
								color: Color(backgroundColor)
									.negate()
									.string()
							}}
						>
							{input.toUpperCase()}
						</label>
					</div>
					<div>
						<input
							name="color"
							id={input}
							type="radio"
							onChange={changeColor}
						/>
					</div>
				</div>
			)
		})
	}

	return (
		<div
			className="container"
			style={{
				width: '100%',
				height: 'auto',
				transition: 'all .3s ease-in-out',
				backgroundColor
			}}
		>
			<ResetCSS />
			<div style={{ display: 'flex', flexWrap: 'wrap' }}>
				{renderInputGroups(inputs)}
			</div>
		</div>
	)
}

render(<App />, document.getElementById('root'))
