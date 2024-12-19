import { useSQLiteContext } from "expo-sqlite"

export type ProductDatabase = {
  nome: string
  email: string
  numero: number
  password: string
  empresa: string
}

export function RegisterUserDatabase() {
  const database = useSQLiteContext()

  async function create(data: Omit<ProductDatabase, "id">) {
    const statement = await database.prepareAsync(
      "INSERT INTO registro (nome, email, numero, password, empresa) VALUES ($name, $email, $numero, $password, $empresa)"
    )

    try {
      const result = await statement.executeAsync({
        $nome: data.nome,
        $numero: data.numero,
        $email: data.email,
        $password: data.password,
        $empresa: data.empresa,
      })

      const insertedRowId = result.lastInsertRowId.toLocaleString()

      return { insertedRowId }
    } catch (error) {
      throw error
    } finally {
      await statement.finalizeAsync()
      console.log("Feito")
      
    }
  }

  return { create }
}
