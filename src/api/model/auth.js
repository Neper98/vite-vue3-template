import config from "@/config"
import http from "@/utils/request"

export default {
	token: {
		url: `${config.API_URL}/token`,
		name: "登录获取TOKEN",
		post: async function(data={}){
			return await http.post(this.url, data);
		}
	},
	rolelist: {
		url: `${config.API_URL}/rolelist`,
		name: "获取角色列表",
		get: async function(data={}){
			return await http.get(this.url, data);
		}
	}
}
