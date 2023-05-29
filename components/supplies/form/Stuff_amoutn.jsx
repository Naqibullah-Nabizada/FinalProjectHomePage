import AddStuffs from "./add-stuffs";
import Buttons from "./button";

const StuffAmoutn = (props) => {
    let stuff_arr = []
    for (let i = 0; i < (props.amount); i++) {
        stuff_arr.push(<AddStuffs number={i+1}/>)
    }
    stuff_arr = stuff_arr.map(item => item  )

    stuff_arr=="" ? "" :stuff_arr.push(<Buttons/>);
    return(
      <>
      {stuff_arr}
      </>
    )
  }

export default StuffAmoutn;