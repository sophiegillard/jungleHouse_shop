export const showDetails =(name, careType, intensity) =>{
    let care = careType;
    let intensityLevel = "";
    care === "light"? care = "de lumière": care = "d'eau";

    intensity === 1? intensityLevel = 'très peu' : intensity === 2 ? intensityLevel = 'peu': intensity === 3 ?  intensityLevel = 'modéré' :  intensityLevel = 'beaucoup';

    alert(`La plante "${name}" requiert ${intensityLevel} ${care}`)
}
