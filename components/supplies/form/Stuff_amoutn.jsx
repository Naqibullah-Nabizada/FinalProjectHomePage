import AddStuffs from "./add-stuffs";
import Buttons from "./button";
import Address from "./address";

const StuffAmoutn = (props) => {
  let allInputes = [<Address/>];
  for (let i = 0; i < props.amount; i++) {
    allInputes.push(<AddStuffs number={i + 1} />);
  }

  allInputes == "" ? "" : allInputes.push(<Buttons />);
  return <>{allInputes}</>;
};

export default StuffAmoutn;
