import {showName} from "./PlantItem.js";
import {showDetails} from "./Scales.js";

export const CareScale = ({name, scaleValue, careType}) =>{
    const ranges = [1,2,3,4];
    const scaleType = careType === 'light' ? '/assets/images/sun(1).png' : '/assets/images/droplet(1).png'

    return(<div className="flex flex-row" onClick={() => showDetails(name, careType, scaleValue)}>
        {
            ranges.map((range)=>
            scaleValue >= range ? <img className="py-1 h-6 w-4" src={scaleType} key={range.toString()}/> : null
        )}
        </div>
    )
}


