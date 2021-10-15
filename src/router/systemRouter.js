//系统路由
const routes = [{
		name: "layout",
		path: "/",
		component: () => import(/* webpackChunkName: "layout" */ '@/layout'),
		redirect: '/dashboard',
		children: [
			{
				name: "dashboard",
				path: "/dashboard",
				meta: {
					title: "首页",
					icon: "el-icon-menu",
					affix: true
				},
				component: () => import(/* webpackChunkName: "home" */ '@/views/home'),
			}
		]
	},
	{
		path: "/cmd",
		component: () => import(/* webpackChunkName: "cmd" */ '@/views/other/cmd'),
		meta: {
			title: "CMD",
			ishidden: true
		}
	},
	{
		path: "/login",
		component: () => import(/* webpackChunkName: "login" */ '@/views/userCenter/login'),
		meta: {
			title: "登录",
			ishidden: true
		}
	}
]

export default routes;
