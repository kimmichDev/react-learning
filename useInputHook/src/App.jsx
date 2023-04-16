import useInput from "./hooks/useInput";

function App() {
  const formSubmitHandler = (e) => {
    e.preventDefault();
    nameReset();
    addressReset();
    alert(`Name is ${name} and address is ${address}`);
  };
  const [name, nameReset, nameBind] = useInput("");
  const [address, addressReset, addressBind] = useInput("");
  return (
    <div className="container mx-auto w-screen h-screen flex items-center">
      <div className="flex w-full justify-center items-center">
        <div className="w-4/12 bg-sky-100 p-5">
          <form action="" onSubmit={formSubmitHandler}>
            <div>
              <p className="text-2xl font-bold text-center">Login Form</p>
            </div>
            <div className="mb-2">
              <label htmlFor="" className="block mb-2">
                Name
              </label>
              <input {...nameBind} type="text" className="w-full p-1 focus:outline-none bg-transparent border border-cyan-400" />
            </div>
            <div className="mb-2">
              <label htmlFor="" className="block mb-2">
                Address
              </label>
              <input {...addressBind} type="text" className="w-full p-1 focus:outline-none bg-transparent border border-cyan-400" />
            </div>
            <div className="">
              <button type="submit" className="w-full border-none py-1 px-10 rounded bg-blue-400 text-slate-200">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
