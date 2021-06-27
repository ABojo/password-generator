function SuccessMessage(props) {
  return (
    <div className="p-5 bg-green-100 rounded popUp w-11/12 max-w-xl mx-auto mb-2">
      <p className="text-green-900">{props.message}</p>
    </div>
  );
}

export default SuccessMessage;
