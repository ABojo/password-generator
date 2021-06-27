function PasswordBox(props) {
  const { password, setPopUpMessage } = props;
  return (
    <div className="w-full mb-8 flex items-stretch">
      <input
        id="passInput"
        value={password}
        className="rounded p-5 bg-true-gray-700 w-full text-white text-xl mr-3 "
      ></input>
      <button
        id="copyButton"
        className="bg-blue-500 px-3 text-white rounded hover:bg-blue-600 transition duration-200"
        onClick={() =>
          setPopUpMessage(
            `The password '${password}' has been copied to your clipboard!`
          )
        }
      >
        <i class="fas fa-copy text-white text-3xl"></i>
      </button>
    </div>
  );
}

export default PasswordBox;
