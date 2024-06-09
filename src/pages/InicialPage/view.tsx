import useInicialPage from './model'

export default function InicialPageView(
  props: ReturnType<typeof useInicialPage>
) {
  return (
    <div className="inicial">
      <h1>Pagina inicial</h1>
      <p>{props.state.user?.name}</p>
      <button
        onClick={() =>
          props.teste({
            name: 'Thales 1',
            permissionGroup: 1,
            telephone: '3423'
          })
        }
      >
        on
      </button>
    </div>
  )
}
