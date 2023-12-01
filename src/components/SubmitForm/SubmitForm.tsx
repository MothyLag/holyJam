const SubmitForm = () => {
  return (
    <div className="h-screen w-screen flex justify-around items-center flex-col">
      <div className="h-[10%] w-[50%] flex items-center flex-col">
        <label className="flex self-start">Ingresa tu nombre: </label>
        <input className="w-[100%]" />
      </div>
      <div className="h-[10%] w-[50%] flex items-center flex-col">
        <label className="flex self-start">Ingresa una frase: </label>
        <input className="w-[100%]" />
      </div>
      <div className="h-[10%] w-[50%] flex items-center flex-col">
        <label className="flex self-start">Ingresa una restricción: </label>
        <input className="w-[100%]" />
      </div>
      <div className="w-[50%] flex justify-end">
        <button submit-button class="">
          Submit
        </button>
      </div>
    </div>
  );
};

export default SubmitForm;
