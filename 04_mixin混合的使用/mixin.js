// 定义混合
//混合就是一些组件的公共数据和方法，被抽离出自成一体，需要时，只需要引入即可。
export default {
    data() {
        return {
            x: 100,
            y: 200
        }
    },
    methods:{
        hello(){
            alert('Hello Friends!')
        }
    }
}
