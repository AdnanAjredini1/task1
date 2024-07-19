
export default function Items({title, content, icon:Icon}) {
    return (
        
        <div className="item-div">
             <div className="icon-div">
                <div><Icon /></div>
             </div>

             <div className="content-div">
                <h4>{title}</h4>
                <p>{content}</p>
             </div>

        </div>
    );
}