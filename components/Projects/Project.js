import WeatherImage from "../../public/Images/weather.png"
import RickyMortyIMage from "../../public/Images/rickMorty.jpg"
import DictionaryImage from "../../public/Images/dictionary.jpg"
import Image from "next/image";
import styles from "../Projects/Project.module.scss";

const callouts = [
    {
        name: 'Rick-and-Morty',
        description: 'Rick-and-Morty-API-React-NextJS',
        imageSrc:RickyMortyIMage,
        imageAlt: "rick-morty",
        href: 'https://rick-and-morty-api-react-next-js.vercel.app/',
    },
    {
        name: 'Weather-Forecast-Web',
        description: 'Weather-Forecast-Web---React-NextJS-API',
        imageSrc:WeatherImage,
        imageAlt: "Weather",
        href: 'https://weather-forecast-web-react-next-js-api.vercel.app/',
    },
    {
        name: 'Dictionary-app',
        description: 'dictionary-app-react-NextJS-with-api',
        imageSrc: DictionaryImage,
        imageAlt: "dictionary",
        href: 'https://dictionary-app-react-nextjs-with-api.vercel.app/',
    },
]

export default function Projects() {
    return (
        <div className={styles.container}>
            <div className={styles.rightLeft}>
                <div className={styles.topBottom}>
                    <h2 className={styles.h2}>Projects</h2>

                    <div className={styles.boxContainer}>
                        {callouts.map((callout) => (
                            <div key={callout.name} className="group relative">
                                <div className={styles.box}>
                                    <Image
                                        src={callout.imageSrc}
                                        alt={callout.imageAlt}
                                        className={styles.img}
                                        objectFit="cover"
                                    />
                                </div>
                                <h3 className={styles.h3}>
                                    <a href={callout.href}>
                                        <span className={styles.span} />
                                        {callout.name}
                                    </a>
                                </h3>
                                <p className={styles.p}>{callout.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
