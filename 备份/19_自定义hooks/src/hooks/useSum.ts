import { ref } from "vue"

export default function(){
    let sum=ref(0)
    let count=ref(1)
    const increment=()=>{
        sum.value+=count.value
    }
    const decrement=()=>{
        sum.value-=count.value
    }
    //向外部暴露数据
    return {sum,count,increment,decrement}
}