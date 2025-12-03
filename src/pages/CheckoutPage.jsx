import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import CheckoutForm from "../components/CheckoutForm.jsx";
import { createOrder } from "../services/api.js";

export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCart();
  const [status, setStatus] = useState("idle");
  const [orderId, setOrderId] = useState(null);

  if (!items.length && !orderId) {
    return <Navigate to="/" replace />;
  }

  const handleConfirm = async (buyer) => {
    try {
      setStatus("loading");
      const total = getTotalPrice();
      const id = await createOrder({ buyer, items, total });
      setOrderId(id);
      clearCart();
      setStatus("done");
    } catch (e) {
      console.error(e);
      setStatus("error");
    }
  };

  return (
    <section className="container my-5">
      <h2 className="mb-4">Checkout</h2>

      {orderId ? (
        <div className="alert alert-success">
          <h4 className="alert-heading">¡Gracias por tu compra!</h4>
          <p>
            Tu orden fue generada correctamente. Guarda este identificador para
            cualquier seguimiento:
          </p>
          <p className="fw-bold mb-3">{orderId}</p>
          <Link to="/" className="btn btn-primary">
            Volver al catálogo
          </Link>
        </div>
      ) : (
        <>
          {status === "error" && (
            <div className="alert alert-danger mb-4">
              Ocurrió un error al generar la orden. Intenta nuevamente.
            </div>
          )}

          <CheckoutForm
            onConfirm={handleConfirm}
            loading={status === "loading"}
          />

          <p className="text-muted small mt-3">
            Total de la compra: <strong>${getTotalPrice().toFixed(2)}</strong>
          </p>
        </>
      )}
    </section>
  );
}
