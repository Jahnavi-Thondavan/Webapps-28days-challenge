import './text.css'

function Text(props){
    return (
        <div className="txtCon">
            <h1>{props.text}</h1>
        </div>
    )
}

export default Text;