const SubmitForm = () => {
  return (
    <div className="h-screen w-screen flex justify-around items-center flex-col">
      <div className="h-[10%] w-[100%] flex items-center flex-col">
        <label>Ingresa tu nombre: </label>
        <input className="w-[50%]" />
      </div>
      <div className="h-[10%] w-[100%] flex items-center flex-col">
        <input className="w-[50%]" />
      </div>
      <div className="h-[10%] w-[100%] flex items-center flex-col">
        <input className="w-[50%]" />
      </div>
    </div>
  );
};

export default SubmitForm;
