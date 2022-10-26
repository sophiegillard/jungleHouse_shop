import {showName} from "./PlantItem.js";
import {showDetails} from "./Scales.js";

export const CareScale = ({name, scaleValue, careType}) =>{
    const ranges = [1,2,3,4];
    const scaleType = careType === 'light' ? '☀️' : '💧'

    return(<div onClick={() => showDetails(name, careType, scaleValue)}>
        {
            ranges.map((range)=>
            scaleValue >= range ? <span key={range.toString()}>{scaleType}</span> : null
        )}
        </div>
    )
}


