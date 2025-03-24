// Progress bar component to make it adjustable easily
// also to make the code readable


const ProgressBar = ({valueNow, valueMin=0, valueMax=100})=> {

    const getColor = (valueNow)=> {
        if (valueNow < 39 ) return "bg-danger";
        if (valueNow >= 65 ) return "bg-warning";
        if (valueNow >= 75) return "bg-success"
    }

    return (
        <div className="progress"
            role="progressbar"
            aria-label="Skills & experience bars"
            aria-valuenow={valueNow}
            aria-valuemin={valueMin}
            aria-valuemax={valueMax}> 
            <div className={`progress-bar
                ${getColor(valueNow)} rounded progress-bar-striped progress-bar-animated`}
                style={{ width: `${valueNow}%`}}>
                    <span>{valueNow}%</span>
            </div>
        </div>

    )
}

export default ProgressBar;
