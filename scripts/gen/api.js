const { generateApi } = require('swagger-typescript-api')
const path = require('path')

generateApi({
	name: 'api.gen.ts',

	output: path.resolve(process.cwd(), './src/shared/api'),

	url: 'https://petstore.swagger.io/v2/swagger.json',

	httpClientType: 'axios',

	generateClient: true,

	templates: path.join(require.resolve('effector-http-api'),'..','..','codegen-template'),
})
