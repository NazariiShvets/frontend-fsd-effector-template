import {withDesign} from 'storybook-addon-designs'
import {Provider} from '../src/app/provider'


const BASE_DESIGN_URL = 'https://www.figma.com/'

export const parameters = {
	actions: {argTypesRegex: '^on[A-Z].*'},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},

	design: {
		type: 'figma',
		url: BASE_DESIGN_URL
	}
}

export const decorators = [
	withDesign,
	(Story) =>
		<Provider>
			<Story/>
		</Provider>
]

