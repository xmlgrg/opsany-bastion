/**
 * 项目默认配置项
 * primaryColor - 默认主题色, 如果修改颜色不生效，请清理 localStorage
 * navTheme - sidebar theme ['dark', 'light'] 两种主题
 * colorWeak - 色盲模式
 * layout - 整体布局方式 ['sidemenu', 'topmenu'] 两种布局
 * fixedHeader - 固定 Header : boolean
 * fixSiderbar - 固定左侧菜单栏 ： boolean
 * contentWidth - 内容区布局： 流式 |  固定
 * baseUrl - Axios BaseURL
 * storageOptions: {} - Vue-ls 插件配置项 (localStorage/sessionStorage)
 *
 */

export default {
	navTheme: 'light', // theme for nav menu
	primaryColor: '#0ba360', // primary color of ant design
	layout: 'sidemenu', // nav menu position: `sidemenu` or `topmenu`
	contentWidth: 'Fixed', // layout of content: `Fluid` or `Fixed`, only works when layout is topmenu
	fixedHeader: true, // sticky header
	fixSiderbar: true, // sticky siderbar
	colorWeak: false,
	menu: {
		locale: true
	},
	title: '堡垒机',
	pwa: false,
	iconfontUrl: '',
	production: process.env.NODE_ENV === 'production' && process.env.VUE_APP_PREVIEW !== 'true',
	baseUrl: process.env.NODE_ENV === 'development' ?
		// 'https://dev.opsany.cn/t/bastion/api/bastion/v0_1/' //服务器
		'http://192.168.0.8:8000/api/bastion/v0_1/' //郭
		// 'http://192.168.0.10:8000/api/bastion/v0_1/' //胡兴起
		:
		window.API_ROOT + "/api/bastion/v0_1/",
	baseUrlOfImg: process.env.NODE_ENV === 'development' ? window.location.origin + '/' : window.location.origin + '/',
	expandMenu: true,
}