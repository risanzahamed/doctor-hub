import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Doctor Hub Mahfuzur Rahman`
    },[title])
}

export default useTitle;