
import Star from './Star 1.png'
import style from './style.module.css'
export default function Card(props){
    let Card_Overlay_Text
    if (props.openSpots === 0 ) {
        Card_Overlay_Text = "SOLD OUT"
    }
    else if(props.location != "Online"){
        Card_Overlay_Text = "OFFLINE"
    }
    else{
        Card_Overlay_Text = props.openSpots + " LEFT "
    }
    return(
        <div className={style.warpper}>
            <img src={props.img}>
            
            </img>
            {<p className={style.overlay}>{Card_Overlay_Text}</p>}
            <div className={style.rating}>
                <img src={Star} ></img>
                <p>{props.stats.rating} ({props.stats.reviewCount}) • {props.location}</p>
            </div>
            <p>{props.title}</p>
            <div className={style.price}>
            <p>From ${props.price}</p>
            <p> / </p>
            <p>person</p>
            </div>
        </div>
    )
}