import "./Card.css";

export default function Card(props) {
    const { id, title, description, price, img, alt, available, stats, location } = props;
   
    let badgeText;
    if (available === 0) {
        badgeText = "SOLD OUT";
    }
    else if (available >= 1){
        badgeText = "ONLINE";
    } 
    
    return (
        <div className="card">
            {badgeText && <span className="bubble">{badgeText}</span>}
            <img className="card-picture" src={img} alt={alt} />
            <h4>
                <i class="fa fa-star"></i> {stats.rating}{" "}
                <span className="grey-text">
                    ({stats.reviewCount}) - {location}
                </span>
            </h4>
            <h5>{title}</h5>
            <h6>
                From ${price} <span className="grey-text">/ person</span>
            </h6>
        </div>
    );
}
