
export default function Items({title, content, icon}) {
    return (
        
        <div className="item-div">
             <div className="icon-div">
             <img src={icon} alt="icon" style={{ width: '65%', height: '65%' }} />
             </div>

             <div className="content-div">
                <h4>{title}</h4>
                <p>{content}</p>
             </div>

        </div>
    );
}