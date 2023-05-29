import StuffRestructure from "../input-fields";
import Stuffs from "../Stuffs";

const AddStuffs = ({ number }) => {
  return (
    <section className="w-[98%]">
      <div className="text-lg">
        <div className="flex container mx-auto justify-center items-center gap-3">
          {Stuffs.map((stuff) => {
            return (
              <>
                <StuffRestructure key={stuff.id} {...stuff} />
              </>
            );
          })}
        </div>
        </div>
    </section>
  );
};
export default AddStuffs;
