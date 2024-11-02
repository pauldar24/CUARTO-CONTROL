const Modal = ({ isOpen, onClose, title, description, price, srcimagen }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded shadow-lg">
          <button onClick={onClose} className="absolute top-2 right-2">✖</button>
          <img src={srcimagen} alt={title} className="mb-2" />
          <h2 className="text-xl">{title}</h2>
          <p>{description}</p>
          <p className="font-bold">{price}</p>
        </div>
      </div>
    );
  };
  