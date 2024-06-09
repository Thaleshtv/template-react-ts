import useInicialPage from './model'
import InicialPageView from './view'

export default function InicialPage() {
  const modelInicialPage = useInicialPage()

  return <InicialPageView {...modelInicialPage} />
}
