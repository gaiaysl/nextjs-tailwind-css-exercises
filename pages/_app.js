import '../styles/globals.scss'
import Layout from "../Containers/Layout/Layout";



function MyApp({ Component, pageProps}) {
  return(
      <Layout>
      <Component {...pageProps} />
      </Layout>
  )



}

export default MyApp
