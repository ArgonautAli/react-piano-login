import "./inputField.css"

export const InputField = ({ handleChange, type }: any) => {
  return (
    <>
      {type !== "password" ? (
        <div className="input-container" >
          <input className="input-field" onChange={(e) => handleChange(e)} />
        </div>
      ) : (
        <div className="input-container" onClick={handleChange}>
          <input className="input-field" />
        </div>
      )}
    </>
  );
};
