import { useState } from "react";
import { useCart } from "../context/CartContext.jsx";

export default function ItemDetail({ item }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, isInCart } = useCart();
  const [added, setAdded] = useState(false);

  if (!item) return null;

  const handleAdd = () => {
    addToCart(item, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const increment = () => setQuantity((q) => Math.min(q + 1, item.stock));
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="card shadow-sm">
      <div className="row g-0">
        <div className="col-md-6">
          <img
            src={item.image}
            className="img-fluid rounded-start detail-img"
            alt={item.title}
          />
        </div>
        <div className="col-md-6">
          <div className="card-body p-4">
            <h2 className="card-title mb-3">{item.title}</h2>
            <p className="text-muted mb-3">{item.category}</p>
            <p className="card-text mb-4">{item.description}</p>
            <h3 className="text-primary mb-4">${item.price}</h3>

            {item.stock > 0 ? (
              <>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <label className="fw-bold">Cantidad:</label>
                  <div className="btn-group" role="group">
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={decrement}
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      disabled
                    >
                      {quantity}
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={increment}
                      disabled={quantity >= item.stock}
                    >
                      +
                    </button>
                  </div>
                  <span className="text-muted">(Stock: {item.stock})</span>
                </div>

                <button
                  type="button"
                  className={`btn btn-primary w-100 ${
                    added ? "btn-added" : ""
                  }`}
                  onClick={handleAdd}
                  disabled={isInCart(item.id)}
                >
                  {added ? (
                    <>
                      <i className="bi bi-check-circle me-2"></i>
                      ¡Agregado!
                    </>
                  ) : (
                    <>
                      <i className="bi bi-cart-plus me-2"></i>
                      Agregar al carrito
                    </>
                  )}
                </button>

                {isInCart(item.id) && !added && (
                  <div className="alert alert-info mt-3 mb-0" role="alert">
                    <i className="bi bi-info-circle me-2"></i>
                    Este producto ya está en tu carrito
                  </div>
                )}
              </>
            ) : (
              <div className="alert alert-danger">
                <i className="bi bi-x-circle me-2"></i>
                Sin stock disponible
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
