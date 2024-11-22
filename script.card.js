const Card = ({ src, title, description, price, onOpenModal, category }) => {
    const product = { src, title, description, price, category };
  
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex justify-center items-center p-3">
        <img id="img-modal" className="flex object-center" src={src} width="200" height="267" class="product-img" />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-blue-600 font-bold mb-2">{price}</p>
          <button
            id="btn-detail"
            onClick={() => onOpenModal(product)}
            className="w-full bg-yellow-400 text-white py-2 rounded hover:bg-yellow-700 transition-colors"
          >
            Ver detalles
          </button>
        </div>
      </div>
    );
  };
  