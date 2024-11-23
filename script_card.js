const Card = ({ category, srcimagen, title, description, price }) => {
  return (
    <div className="inicio-pro">
    <div class="productRow" data-category={category}>
        <button className="w-full h-5/6 transparent"><a href="products.html">
          
          <img src={srcimagen} width="200" height="267" class="product-img" /> <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-transparent hover:text-white hover:shadow-xl transition duration-300">VER EN PRODUCTOS</p>
          
        </a></button>

      <div class="information" className="m-0">
        <h5 class="product-information">{title}</h5>
      </div>
    </div>
    </div>
  );
};

const CardList = ({ cardsData }) => (
  <div class="content-section">
    {cardsData.map((card, index) => (
      <Card
        key={index}
        category={card.category}
        srcimagen={card.src}
        title={card.title}
        description={card.description}
        price={card.price}
      />
    ))}
  </div>
);