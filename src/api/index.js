/**
 * @description 自动import导入所有 api 模块
 */

const files = require.context('./model', false, /\.js$/)
const modules = {}
files.keys().forEach((key) => {
	modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default modules
// modules 形如 
// {
// 	auth: {
// 		token: {}
// 	},
// 	common: {
// 		upload: {}
// 	}
// }

