import { reactive} from 'vue'
import {nanoid} from 'nanoid'
import axios, { AxiosError } from 'axios'
import { type Images } from '@/types'
export default function(){
    let imageList=reactive<Images>(JSON.parse(sessionStorage.getItem('imgs') as string)||[])
    async function getDog(){
        try {
            const {data} = await axios.get("https://dog.ceo/api/breed/pembroke/images/random")
            const newImg={id:nanoid(),url:data.message}
            imageList.push(newImg)
            sessionStorage.setItem('imgs',JSON.stringify(imageList))
        } catch (error) {
              // 处理错误
            const err = <AxiosError>error
            console.log(err.message)  
        }
    }
    return {imageList,getDog}
}