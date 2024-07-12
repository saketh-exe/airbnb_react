import logo from "./airbnb 1.png"

export default function Nav(){
    const stt = {
        width : '100%',
        backgroundColor : "white",
        height : "70px",
        boxShadow : "0px 0px 10px #918E9B"

    }
    const img_sty = {
        marginTop : '22px',
        marginLeft : '30px'
    }
    return(
        <nav style={stt}>
            <img src={logo} style={img_sty}></img>
        </nav>
    )
}