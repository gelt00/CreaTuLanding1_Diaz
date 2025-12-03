import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function CartPage() {
  const { items, updateQty, removeFromCart, clearCart, getTotalPrice } =
    useCart();

  if (!items.length) {
    return (
      <section className="container my-5">
        <div className="text-center py-5">
          <h2 className="mb-3">Tu carrito está vacío</h2>
          <p className="text-muted">Explora el catálogo y agrega productos.</p>
          <Link to="/" className="btn btn-primary">
            Volver al catálogo
          </Link>
        </div>
      </section>
    );
  }

  const total = getTotalPrice();

  return (
    <section className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Carrito</h2>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm"
          onClick={clearCart}
        >
          Vaciar carrito
        </button>
      </div>

      <div className="row g-4">
        <div className="col-12 col-lg-8">
          <ul className="list-group">
            {items.map((it) => (
              <li
                key={it.id}
                className="list-group-item d-flex align-items-center"
              >
                <img
                  src={it.image}
                  alt={it.title}
                  className="rounded me-3 cart-thumb"
                />
                <div className="flex-grow-1">
                  <h6 className="mb-1">{it.title}</h6>
                  <small className="text-muted">Precio: ${it.price}</small>
                </div>

                <div
                  className="btn-group me-3"
                  role="group"
                  aria-label="Cantidad"
                >
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => updateQty(it.id, it.quantity - 1)}
                    disabled={it.quantity <= 1}
                  >
                    −
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary disabled"
                  >
                    {it.quantity}
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => updateQty(it.id, it.quantity + 1)}
                    disabled={it.stock && it.quantity >= it.stock}
                  >
                    +
                  </button>
                </div>

                <div className="text-end me-3 cart-line-total">
                  <div className="fw-bold">
                    ${(it.price * it.quantity).toFixed(2)}
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => removeFromCart(it.id)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-12 col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Resumen</h5>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <strong>${total.toFixed(2)}</strong>
              </div>
              <p className="text-muted small">
                * Impuestos y envío se calculan en el checkout.
              </p>
              <Link to="/checkout" className="btn btn-primary w-100">
                Proceder al pago
              </Link>
              <Link to="/" className="btn btn-link w-100 mt-2">
                Seguir comprando
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
