module.exports = {
    dest:'./dist',
    title: 'Zbot 文档',
    description: '裕鑫赞助',
    themeConfig: {
        sidebar:[
            {
                title: '功能',
                children: [
                    '/guide/switch.md',
                    '/guide/scramble.md',
                    '/guide/wca.md',
                    '/guide/comp.md',
                    '/guide/cuber.md',
                    '/guide/cubepic.md',
                    '/guide/admin.md',
                    '/guide/welcome.md',
                    '/guide/learn.md'
                ]
            },
            {
                title:"附录",
                children:[
                    '/appendices/botml.md'
                ]
            }
        ],
        sidebarDepth:3
    }
}

