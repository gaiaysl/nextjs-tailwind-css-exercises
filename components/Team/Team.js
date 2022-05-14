import styles from "../Team/Team.module.scss"
import Image from "next/image";
import emreImage from "../../public/Images/emre.jpg"
import GayeImage from "../../public/gaye.jpg"

const teams = [
    {
        id: 1,
        name: 'Gaye Yanardağ',
        job:'Jr.React Developer',
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
            'Qui dicta minus molestiae vel beatae natus eveniet ratione' +
            ' temporibus aperiam harum alias officiis assumenda officia quibusdam' +
            ' deleniti eos cupiditate dolore doloribus!',
        href: 'team',
        imageSrc: GayeImage,
        imageAlt: "Gaye Yanardag",
        git:'https://github.com/gaiaysl',
    },

    {
        id: 2,
        name: 'Emre Yeşil',
        job:'Software Developer',
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
            'Qui dicta minus molestiae vel beatae natus eveniet ratione' +
            ' temporibus aperiam harum alias officiis assumenda officia quibusdam' +
            ' deleniti eos cupiditate dolore doloribus!',
        href: 'team',
        imageSrc: emreImage,
        imageAlt: "Emre Yesil",
    },

]


export default function Team() {
    return (
        <div className={styles.continer}>
            <div className={styles.header}>
                <div className={styles.write}>
                    <p className={styles.p}>BUILDING TEAM</p>
                    <h1 className={styles.h1}>The Talented People Behind the Scenes of the Organization</h1>
                </div>
            </div>
            <div className={styles.containerTwo}>
                <div className={styles.content}>
                    <div className={styles.card}>

                        {teams.map((member) =>(
                        <div key={teams.id} className={styles.text}>
                            <div className={styles.textContent}>
                                <div className={styles.smallCard}>
                                    <div className={styles.img}>
                                        <Image
                                            src={member.imageSrc}
                                            alt={member.imageSrc}
                                            className={styles.team1}></Image>
                                    </div>
                                </div>

                                    <div className="px-6 mt-16">
                                        <div className="font-bold text-3xl text-center pb-1">{member.name}</div>
                                        <p className="text-gray-800 text-sm text-center">{member.job}</p>
                                        <p className="text-center text-gray-600 text-base pt-3 font-normal">{member.desc}</p>
                                        <div className="w-full flex justify-center pt-5 pb-5">
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                                    </svg>
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div>
                                                    <svg xmlns="" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                    </svg>
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="mx-5">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                                        <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </div>


                            </div>
                        </div>
                        ))}
                    </div>

                </div>

            </div>

        </div>

    );
}