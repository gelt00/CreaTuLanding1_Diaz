import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../services/api";
import ItemDetail from "../components/ItemDetail.jsx";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        setStatus("loading");
        const data = await getProductById(id);
        if (active) {
          setItem(data);
          setStatus("done");
        }
      } catch (e) {
        console.error(e);
        if (active) setStatus("error");
      }
    }
    load();
    return () => { active = false; };
  }, [id]);

if (status === "loading") {
  return (
    <section className="container my-5">
      <div className="d-flex flex-column align-items-center py-5">
        <div
          className="spinner-border text-primary mb-3"
          role="status"
          aria-hidden="true"
        />
        <p className="text-muted mb-0">Cargando detalle…</p>
      </div>
    </section>
  );
}

if (!item) {
  return (
    <section className="container my-5">
      <p className="text-muted">Producto no encontrado.</p>
      <Link to="/" className="btn btn-outline-secondary">
        Volver
      </Link>
    </section>
  );
}


  return (
    <section className="container my-5">
      <ItemDetail item={item} />
    </section>
  );
}
