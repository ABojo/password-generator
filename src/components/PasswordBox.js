function PasswordBox(props) {
  const { password, generatePassword } = props;
  return (
    <div className="w-full bg-true-gray-700 rounded shadow relative">
      <input
        value={password}
        className="rounded p-5 pr-32 bg-true-gray-700 w-full text-true-gray-100 font-bold text-2xl"
      ></input>
      <div className="absolute top-1/2 right-5 text-blue-100 text-3xl transform -translate-y-1/2 ">
        <button>
          <i class="fas fa-copy mr-6 hover:text-blue-500 transition duration-200"></i>
        </button>
        <button onClick={generatePassword}>
          <i class="fas fa-random hover:text-blue-500 transition duration-200"></i>
        </button>
      </div>
    </div>
  );
}

export default PasswordBox;
