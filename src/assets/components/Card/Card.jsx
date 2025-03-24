import "./Card.css"

const Card = ({svg, name, body}) => {

    return (
        <div className="container-fluid shadow-best h-100 w-100 p-0 rounded my-1 w-100 bg-secondary">
            <div className="p-0 ">
               <span className="text-success px-2">{svg}</span> 
            </div>
            <h6 className="px-2">{name}</h6>

            <p className="text-card-small px-2">{body}</p>

        </div>
    )
}

export default Card;