import WeatherImage from "../../public/Images/weather.png"
import RickyMortyIMage from "../../public/Images/rickMorty.jpg"
import DictionaryImage from "../../public/Images/dictionary.jpg"
import Image from "next/image";

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
        <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                    <h2 className="text-2xl font-extrabold text-gray-900">Projects</h2>

                    <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                        {callouts.map((callout) => (
                            <div key={callout.name} className="group relative">
                                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                    <Image
                                        src={callout.imageSrc}
                                        alt={callout.imageAlt}
                                        className="w-full h-full object-center object-cover"
                                    />
                                </div>
                                <h3 className="mt-6 text-sm text-gray-500">
                                    <a href={callout.href}>
                                        <span className="absolute inset-0" />
                                        {callout.name}
                                    </a>
                                </h3>
                                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
