/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import styles from "../Product/Product.module.scss"
const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    // More products...
]

export default function Product() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.text}>Customers also purchased</h2>

                <div className={styles.main}>
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div >
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className={styles.img}
                                />
                            </div>
                            <div className={styles.product}>
                                <div>
                                    <h3 className={styles.link}>
                                        <a href={product.href}>
                                            <span aria-hidden="true" className={styles.aria} />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className={styles.color}>{product.color}</p>
                                </div>
                                <p className={styles.price}>{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
