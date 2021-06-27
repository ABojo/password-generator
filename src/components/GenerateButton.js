function GenerateButton(props) {
  return (
    <button
      onClick={props.generate}
      className="w-full p-5 bg-blue-500 text-white font-bold rounded text-2xl hover:bg-blue-600 transition duartion-200"
    >
      Generate
    </button>
  );
}

export default GenerateButton;
