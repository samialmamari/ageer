
export default function Product({product: {id,name, price, image, description, category_id ,categories: {name: category}}}) {

  return (
    <a className="card w-96 bg-base-100 shadow-xl mb-6" href={`/products/details?id=${id}`}>
      <figure>
        <img src={`/storage/${image}`} alt="Shoes" />
        </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{category}</p>
        <p>{price} OMR</p>
        <p>{description}</p>
      </div>
    </a>
  )
}
