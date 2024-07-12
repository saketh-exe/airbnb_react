

export default function Hero_img(props){
    const sty = {
        marginTop : "5vw",
        width : "75%",
        maxWidth: "900px"

    }
    return(
        <div style={{display : "flex",justifyContent:"center"}}>
            <img src={props.path} style={sty}>
            </img>

        </div>
    )
}