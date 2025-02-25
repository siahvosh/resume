import './TopCard.css'

export const TopCard = (props: any) => {
    return (
        <div style={{ backgroundImage: `url(${props.image})` }}  className={"about"}>
            <span className={'about-title'}> {props.title} </span>
            <span className={'about-description'}> {props.description}  </span>
        </div>
    )
}