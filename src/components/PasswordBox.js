function PasswordBox(props) {
  const { password } = props;
  return (
    <div className="w-full mb-8 flex items-stretch">
      <input
        value={password}
        className="rounded p-8 bg-true-gray-700 w-full text-white font-bold text-xl mr-3 "
      ></input>
      <button className="bg-blue-500 p-5 text-white rounded hover:bg-blue-600  transition duration-200">
        <i class="fas fa-copy text-white text-3xl"></i>
      </button>
    </div>
  );
}

export default PasswordBox;
