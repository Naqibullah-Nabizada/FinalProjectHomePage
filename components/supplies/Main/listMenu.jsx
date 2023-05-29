import Main_titles from "./menuTitle";
import TitlesRestructure from "./menu";

const Main = () => {
  return (
    <div className="w-[100%] flex m-10">
      <div className="w-[28%] m-10">
        {Main_titles.map((title) => {
          return <TitlesRestructure key={title.id} {...title} />;
        })}
      </div>
    </div>
  );
};
export default Main;
