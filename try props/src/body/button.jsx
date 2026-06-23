import "./button.css";

export default function Button({title,children})


{
    return(
        <button className="tag">{title}<br></br>{children}</button>
    );
}