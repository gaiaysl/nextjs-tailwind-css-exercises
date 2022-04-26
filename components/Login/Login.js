
import { LockClosedIcon } from '@heroicons/react/solid'
import styles from "../Login/Login.module.scss"

export default function Login() {
    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
            <div className={styles.container}>
                <div className={styles.content}>
                    <div>

                        <h2 className={styles.font}>Sign in to your account</h2>
                        <p className={styles.text}>
                            Or{' '}
                            <a href="#" className={styles.link}>
                                start your 14-day free trial
                            </a>
                        </p>
                    </div>
                    <form className={styles.form} action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className={styles.box}>
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className={styles.input}
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className={styles.inputTwo}
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div className={styles.containerTwo}>
                            <div className={styles.contentTwo}>
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className={styles.inputThree}
                                />
                                <label htmlFor="remember-me" className={styles.label}>
                                    Remember me
                                </label>
                            </div>

                            <div className={styles.linkC}>
                                <a href="#" className={styles.a}>
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className={styles.button}
                            >
                <span className={styles.icon}>
                  <LockClosedIcon className={styles.look} aria-hidden="true" />
                </span>
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
