import './App.css';
import Slider from "./components/Slider";
import {useEffect} from "react";
import {store} from "./store";
import * as actionTypes from "./store/actions";
import {getOffsets, getRetreat} from "./functions/getOffsets";

function App() {
    useEffect(() => {
        const actualSize = getOffsets(window.innerWidth)
        const actualRetreat = getRetreat(window.innerWidth)
        const activeSlide = actualRetreat

        store.dispatch ({
            type: actionTypes.cellUpdated,
            payload: { actualSize, actualRetreat, activeSlide }
        })
    }, [])

  return (
      <div className='actual'>
          <div className='container'>
              <h2 className='actualTitle'>Актуальное</h2>
              <Slider/>
          </div>
      </div>
  )
}

export default App;
