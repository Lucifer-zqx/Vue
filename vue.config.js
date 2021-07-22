module.exports = {
    //关闭语法检查
    lintOnSave:false,
    // 第一种配置代理方式
    // devServer:{
    //     proxy:'http://localhost:8080'
    // }
    // 第二种配置代理方式
    // devServer:{
    //     proxy:{
    //         '/api':{
    //             target:'http://localhost:8080',
    //             pathWrite:{'^api':''}
    //         },
    //         '/demo':{
    //             target:'http://localhost:8081',
    //             pathWrite:{'^demo':''}
    //         }
    //     }
    // }
}