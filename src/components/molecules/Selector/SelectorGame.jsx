import { SELECTOR_GAME } from "../../../shared/fibonacci";
import { useContext } from "react";
import { GameContext } from "../../../context/GameContextProvider";
const SelectorGame = () => {
    const { setSelectedSeries } = useContext(GameContext);
    const handleChange = (e) => {
      setSelectedSeries(e.target.value);
    };
  
    return (
      <div>
      <select name="selector" id="selector" onChange={(e) =>  handleChange(e)}>
        {Object.entries(SELECTOR_GAME).map(([key, value]) => (
          <option key={key} value={value}>
            {key}
          </option>
        ))}
      </select>
    </div>
      );
    };
    
    


export default SelectorGame;
