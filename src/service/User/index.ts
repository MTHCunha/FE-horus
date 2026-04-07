import { api } from "@/infra/axios.config";
import type IUser from "@/types/User";
/**
 * Define a estrutura necessária para a alteração de senha.
 * O uso de '&' (Intersection) aqui separa o que é identificação do que é ação.
 */
type ChangePasswordPayload = {
  action: "CHANGE_PASSWORD";
  new_password: string;
};

/**
 * Cria um novo usuário no sistema.
 * @param payload - Objeto contendo todos os dados do novo usuário (IUser).
 * @returns Promise que resolve com o usuário criado.
 */
export async function createUser(payload: IUser): Promise<IUser> {
  // Passamos <IUser> para o Axios saber que o 'data' da resposta será um usuário.
  const response = await api.post<IUser>("/register", payload);
  return response.data;
}

/**
 * Busca os dados de um usuário específico pelo ID.
 * @param user_id - Identificador único do usuário.
 */
export async function getUser(user_id: string): Promise<IUser> {
  // O Axios interpreta o primeiro parâmetro do .get como a URL.
  const response = await api.get<IUser>(`/users/${user_id}`);
  return response.data;
}

/**
 * Altera a senha do usuário.
 * Note que o user_id vai na URL (padrão REST), e os dados de troca no body.
 * @param user_id - ID do usuário que terá a senha alterada.
 * @param payload - Objeto com a nova senha e a ação.
 */
export async function changePassword(
  user_id: string,
  payload: ChangePasswordPayload,
): Promise<IUser> {
  // PUT é o método semântico correto para atualizações completas de um recurso.
  const response = await api.put<IUser>(`/change_password/${user_id}`, payload);
  return response.data;
}

/**
 * Remove um usuário do sistema.
 * @param user_id - ID do usuário a ser excluído.
 * @returns Retorna os dados do usuário removido (ou conforme definido no seu backend).
 */
export async function deleteUser(user_id: string): Promise<IUser> {
  // DELETE remove o recurso apontado pela URL.
  const response = await api.delete<IUser>(`/users/${user_id}`);
  return response.data;
}
