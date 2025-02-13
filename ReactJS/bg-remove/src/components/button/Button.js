


function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={`bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 ${props.className}`}
    >
      {props.children}
    </button>
  );
}

export default Button;