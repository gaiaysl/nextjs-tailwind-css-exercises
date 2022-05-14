/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import styles from "../Navbar/Navbar.module.scss"
import Image from "next/image";
import Link from "next/link";




const navigation = [
    { name: 'Dashboard', href: '/', current: true },
    { name: 'Team', href: 'team', current: false },
    { name: 'Projects', href: 'project', current: false },
    { name: 'Login', href: 'login', current: false },

]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <Disclosure as="nav" className={styles.nav}>
            {({ open }) => (
                <>
                    <div className={styles.navContainer}>
                        <div className={styles.navContent}>
                            <div className={styles.contentTwo}>
                                {/* Mobile menu button*/}
                                <Disclosure.Button className={styles.navButton}>
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className={styles.icon} aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className={styles.menuIcon} aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className={styles.menu}>
                                <div className={styles.container}>
                                    <Link href="/">
                                    <Image src="/Gaia-Logo.png" alt="logo" width="140"  height="100" className={styles.image}/>
                                    </Link>
                                </div>
                                <div className={styles.navigation}>
                                    <div className={styles.navigationTwo}>
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? styles.durum1 : styles.durum2,
                                                    styles.durum3
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.right}>
                                <button
                                    type="button"
                                    className={styles.button}
                                >
                                    <span className={styles.rightText}>View notifications</span>
                                    <BellIcon className={styles.rightButton} aria-hidden="true" />
                                </button>

                                {/* Profile dropdown */}
                                <Menu as="div" className="ml-3 relative">
                                    <div>
                                        <Menu.Button className={styles.menuButton} >
                                            <span className={styles.span}>Open user menu</span>
                                            <Image
                                                className={styles.menuButton}
                                                src="/gaye.jpg"
                                                alt="gaye"
                                                width="42"
                                                height="42"


                                            ></Image>
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter={styles.enter}
                                        enterFrom={styles.enterFrom}
                                        enterTo={styles.enterTo}
                                        leave={styles.leave}
                                        leaveFrom={styles.leaveFrom}
                                        leaveTo={styles.leaveTo}
                                    >
                                        <Menu.Items className={styles.menuItems}>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? styles.active1 : '', styles.active2)}
                                                    >
                                                        Your Profile
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? styles.active3 : '', styles.active4 )}
                                                    >
                                                        Settings
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? styles.active5 : '', styles.active6)}
                                                    >
                                                        Sign out
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className={styles.disc}>
                        <div className={styles.panel}>
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? styles.item1 : styles.item2 ,
                                        styles.item3
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
