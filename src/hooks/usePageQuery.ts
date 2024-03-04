import {useSearchParams} from "react-router-dom";
import {useState} from "react";

const usePageQuery = () =>{
    const [disabled, setDisabled] = useState<boolean>(null)

    const [query, setQuery] = useSearchParams({pages: '1'});
    const pages = query.get('pages')
    return{
        setDisabled,
        disabled,
        pages,
        nextPage:()=>setQuery(prev => {

            prev.set('pages', (+prev.get('pages') + 1 ).toString())
            if(disabled){
                setDisabled(false)
            }
            return prev

        }),
        prevPage:()=>setQuery(prev => {

            prev.set('pages', (+prev.get('pages') - 1 ).toString())

            return prev

        })
    }

}
export {usePageQuery}