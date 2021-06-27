function PasswordBox(props) {
  const { password, generatePassword } = props;
  return (
    <div className="w-full bg-true-gray-700 rounded shadow relative">
      <input
        value={password}
        className="rounded p-8 pr-44 bg-true-gray-700 w-full text-true-gray-100 font-bold text-2xl"
      ></input>
      <div className="absolute top-1/2 right-5 text-blue-300 text-3xl transform -translate-y-1/2 flex items-center">
        <div className="flex items-center flex-col mr-6">
          <h2 className="text-sm font-bold mb-2 text-blue-100">Copy</h2>
          <button>
            <i class="fas fa-copy hover:text-blue-500 transition duration-200"></i>
          </button>
        </div>

        <div className="flex items-center flex-col">
          <h2 className="text-sm font-bold text-blue-100 mb-2 ">Random</h2>
          <button onClick={generatePassword}>
            <i class="fas fa-random hover:text-blue-500 transition duration-200"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PasswordBox;
