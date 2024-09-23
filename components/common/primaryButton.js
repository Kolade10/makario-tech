import { useRouter } from "next/router"

const PrimartButton = ({children, href}) =>{
    const router = useRouter()
    return(
        <button onClick={()=>(router.push(href))} className="text-[14px] text-white px-[30px] py-[15px] bg-[#337ab7] w-fit m-auto">
            {children}
        </button>
    )
}
export default PrimartButton