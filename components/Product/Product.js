
import styles from "./SingleProduct.module.scss"


export default function SingleProduct() {
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
