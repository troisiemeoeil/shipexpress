import { proxy } from 'valtio'
 

function Data() {
    const state = proxy({
        current: null, 
        items: {
            HydraDecals : "#ffffff",
            HydraSteaks : "#ffffff",
            HydraHull : "#ffffff",
            HydraHullDark : "#ffffff",
            HydraAntiCollisionLight1 : "#ffffff",
            HydraAntiCollisionLight2 : "#ffffff",
            HydraRockets : "#ffffff",
            HydraInterior : "#ffffff",
            HydraInteriorRed : "#ffffff",
            HydraControlPanel : "#ffffff",
            HydraWheels : "#FF0000",
            HydraCanopyGlass : "#ffffff",
            HydraMechanics : "#ffffff",
            HydraJetBlades : "#ffffff",
        }
    })
  return state
}

export default Data