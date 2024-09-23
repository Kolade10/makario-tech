import Footer from "./footer"

const Shell = ({children}) =>{
    return(
        <div>
            {children}
            <Footer/>
        </div>
    )
}
export default Shell