import StuffRestructure from "../input-fields";
import Stuffs from "../Stuffs";

const AddStuffs = (props) => {
  return (
    <div className="flex container mx-auto justify-center items-center gap-3">
      {Stuffs.map((stuff) => {
        return <StuffRestructure key={stuff.id} {...stuff} number={props.number}/>;
      })}
    </div>
  );
};
export default AddStuffs;
