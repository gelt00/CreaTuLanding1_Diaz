import { Link } from "react-router-dom";

export default function ItemCard({ item }) {
  return (
    <div className="card h-100 product-card">
      <div className="position-relative">
        <img
          src={item.image}
          className="card-img-top product-card-img"
          alt={item.title}
        />
        {item.category && (
          <span className="badge bg-dark text-uppercase position-absolute top-0 start-0 m-2 product-card-category">
            {item.category}
          </span>
        )}
      </div>

      <div className="card-body product-card-body">
        <h5 className="product-card-title mb-1">{item.title}</h5>
        <p className="product-card-description mb-3">{item.description}</p>

        <div className="mt-auto product-card-footer">
          <span className="price-tag">${item.price}</span>
          <Link to={`/item/${item.id}`} className="btn btn-primary btn-sm px-3">
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
}
