import { useState } from "react";

export default function CheckoutForm({ onConfirm, loading }) {
  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyer((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nextErrors = {};
    if (!buyer.name.trim()) nextErrors.name = "Ingresa tu nombre";
    if (!buyer.email.trim()) nextErrors.email = "Ingresa tu correo";
    if (!buyer.phone.trim()) nextErrors.phone = "Ingresa un teléfono";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    onConfirm?.(buyer);
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
      <h3 className="mb-4">Datos de contacto</h3>

      <div className="mb-3">
        <label className="form-label">Nombre completo</label>
        <input
          type="text"
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          name="name"
          value={buyer.name}
          onChange={handleChange}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Correo electrónico</label>
        <input
          type="email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          name="email"
          value={buyer.email}
          onChange={handleChange}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Teléfono</label>
        <input
          type="tel"
          className={`form-control ${errors.phone ? "is-invalid" : ""}`}
          name="phone"
          value={buyer.phone}
          onChange={handleChange}
        />
        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
      </div>

      <button
        type="submit"
        className="btn btn-primary w-100"
        disabled={loading}
      >
        {loading ? "Generando orden..." : "Confirmar compra"}
      </button>
    </form>
  );
}
