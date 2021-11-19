

// 开发环境下配置
const DEV_CONFIG = {
    // 标题
    APP_NAME: "后台管理系统",

    // 版本号
    APP_VER: "1.0.0",

    // 接口地址
    API_URL: "/api",

    // 请求超时
    TIMEOUT: 10000,

    // TokenName
    TOKEN_NAME: "Authorization",

    // Token前缀，注意最后有个空格，如不需要需设置空字符串
    TOKEN_PREFIX: "Bearer ",

    // 追加其他头
    HEADERS: {},

    // 请求是否开启缓存
    REQUEST_CACHE: false,

    // 布局 默认：default | 通栏：header | 经典：menu | 功能坞：dock
    // dock将关闭标签和面包屑栏
    LAYOUT: 'menu',

    // 菜单是否折叠
    MENU_IS_COLLAPSE: false,

    // 是否开启多标签
    LAYOUT_TAGS: true,

    // 主题颜色
    COLOR: ''

}

// 生产环境下额外的配置，覆盖开发环境的配置
const PRO_CONFIG = {
    API_URL: "https://www.fastmock.site/mock/18f94db5174920c0ad6a1e455bd1a1ca/scui-demo/api"
}

let APP_CONFIG = DEV_CONFIG
if(import.meta.env.PROD) {
    APP_CONFIG = {
        ...APP_CONFIG,
        ...PRO_CONFIG
    }
}

export default APP_CONFIG
