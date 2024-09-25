import { useRouter } from "next/router"

const PrimartButton = ({children, href, style}) =>{
    const router = useRouter()
    return(
        <button onClick={()=>(router.push(href))} className={`text-[14px] px-[30px] py-[15px] bg-[#337ab7] w-fit m-auto ${style}`}>
            {children}
        </button>
    )
}
export default PrimartButton