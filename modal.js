const Modal = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="flex fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div id="div-modal" className="bg-white rounded-lg max-w-lg w-full shadow-xl transform transition-all">
        <button
          onClick={onClose}
          className="absolute rounded-full w-10 h-10 bg-red-400 top-2 right-2 text-gray-500 hover:bg-red-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div id="img-modal" className="p-6">
          <img
            src={product.src}
            alt={product.title}
            className="flex justify-center items-center h-96 object-cover rounded-lg mb-4"
          />

          <h2 className="flex justify-center text-2xl font-bold text-gray-800 mb-2">
            {product.title}
          </h2>

          <p className="flex justify-center text-xl text-blue-600 font-semibold mb-3">
            {product.price}
          </p>

          <p className="flex justify-center text-gray-600 mb-4">{product.description}</p>

          <div className="flex justify-center">
            <button
              onClick={onClose}
              className="flex justify-center items-center bg-yellow-400 text-white rounded hover:bg-yellow-700 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};