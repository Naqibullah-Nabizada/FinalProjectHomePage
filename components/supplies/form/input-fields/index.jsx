const StuffRestructure = (props) => {
  const { input_name, input_type, disable,number,name} = props;
  return (
    <div className="w-[32%]">
      <label className="form-label">{input_name}</label>
      <input
        type={input_type}
        disabled={disable}
        className="form-control form-control-sm mb-3"
        placeholder={input_name}
        name={`${name}${number}`}
      />
    </div>
  );
};
export default StuffRestructure;
