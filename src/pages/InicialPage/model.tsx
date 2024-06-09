import { useAuthStore } from '../../store/userStore'
import { User } from '../../types/userType'

interface Data {
  telefone: string
  nome: string
}

export default function useInicialPage() {
  const { state, dispatch } = useAuthStore()

  const teste = (dataUser: User) => {
    dispatch.setUser({
      name: dataUser.name,
      permissionGroup: dataUser.permissionGroup,
      telephone: dataUser.telephone
    })
  }

  const get = (data: Data) => {
    console.log(data)
  }
  return {
    state,
    teste,
    get
  }
}
