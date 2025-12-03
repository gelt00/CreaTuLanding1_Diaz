import { db } from "./firebase";
import {
  collection,
  getDocs,
  getDoc,
  query,
  where,
  doc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

function mapProductDoc(snapshot) {
  const data = snapshot.data();

  return {
    id: snapshot.id,
    title: data.title,
    price: data.price,
    category: data.category,
    stock: data.stock,
    description: data.description,
    image: data.image,
  };
}

// Listado completo
export async function getProducts() {
  const ref = collection(db, "products");
  const snap = await getDocs(ref);
  return snap.docs.map(mapProductDoc);
}

// Listado por categoría
export async function getProductsByCategory(categoryId) {
  const ref = collection(db, "products");
  const q = query(ref, where("category", "==", categoryId));
  const snap = await getDocs(q);
  return snap.docs.map(mapProductDoc);
}

// Detalle por ID
export async function getProductById(id) {
  const ref = doc(db, "products", id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return mapProductDoc(snap);
}

// Crear orden de compra
export async function createOrder({ buyer, items, total }) {
  const ref = collection(db, "orders");
  const docRef = await addDoc(ref, {
    buyer,
    items: items.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
    })),
    total,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}
