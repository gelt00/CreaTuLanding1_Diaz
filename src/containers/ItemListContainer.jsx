import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../services/api";
import ItemList from "../components/ItemList.jsx";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | loading | done | error

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        setStatus("loading");
        const data = categoryId
          ? await getProductsByCategory(categoryId)
          : await getProducts();
        if (active) {
          setItems(data);
          setStatus("done");
        }
      } catch (e) {
        console.error(e);
        if (active) setStatus("error");
      }
    }
    load();
    return () => {
      active = false;
    };
  }, [categoryId]);

  if (status === "loading") {
    return (
      <section className="container my-5">
        <div className="d-flex flex-column align-items-center py-5">
          <div
            className="spinner-border text-primary mb-3"
            role="status"
            aria-hidden="true"
          />
          <p className="text-muted mb-0">Cargando productos…</p>
        </div>
      </section>
    );
  }

  if (status === "error") {
    return (
      <section className="container my-5">
        <div className="alert alert-danger">
          Ocurrió un error al cargar los productos. Intenta nuevamente.
        </div>
      </section>
    );
  }

  return (
    <section className="container my-5">
      {categoryId ? (
        <h2 className="mb-4 section-title">Categoría: {categoryId}</h2>
      ) : (
        <h2 className="mb-4 section-title">Catálogo</h2>
      )}
      <ItemList items={items} />
    </section>
  );
}
