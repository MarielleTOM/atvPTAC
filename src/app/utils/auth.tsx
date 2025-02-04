'use server'

import { cookies } from "next/headers"
import { ApiURL } from "./config"
import { redirect } from 'next/navigation'


//Server actions
export async function singup(state: any, formData: FormData) {
  const email = formData.get('email')
  const password = formData.get('password')

  if(!email || !password) return {
        error: true,
        email,
        mensagem: 'Valores faltando'
  }

  try {
        const res = await fetch(`${ApiURL}/auth/login`, {
                method: 'POST',
                headers: {'Context-Type': 'application/json'},
                body: JSON.stringify({email, password})
        })

        console.log(res)

        const data = await res.json()

        const {erro, mensagem, token} = data

        if (erro) return {erro, email, mensagem}
        const cookieStored =  await cookies()
        cookieStored.set('restaurant-token', token, {
                maxAge: 60*60*1 // 1 hora
        })
        

  } catch (error) {
        return {
                erro: true,
                email,
                mensagem: 'Algum erro no redirecionamento'
        }
  }
  redirect(`/`)
}

  export async function register(state: any, formData : FormData) {
        const nome = formData.get('nome')
        const email = formData.get('email')
        const password = formData.get('password')
        const confirm_password = formData.get('confirm_password')
       console.log(nome, email, password, confirm_password)

        if(!email || !password || !nome || !confirm_password) return {
              error: true,
              email,
              mensagem: 'Valores faltando'
        }      

        if (password != confirm_password){
                return {
                        erro: true,
                        email,
                        mensagem: 'As duas senhas devem ser iguais'
                }
        }

        try {
           const res = await fetch(`${ApiURL}/auth/cadastro`, {
                 method: 'POST',
                 headers: {'Context-Type': 'application/json'},
                 body: JSON.stringify({nome, email, password})
                })

console.log(res)

const data = await res.json()

const {erro, mensagem, token} = data

if (erro) return {erro, email, mensagem}
        const cookieStored =  await cookies()
        cookieStored.set('restaurant-token', token, {
                maxAge: 60*60*1 // 1 hora
        })

 } catch (error) {
      return {
            erro: true,
            email,
            mensagem: 'Algum erro no redirecionamento'
            }
      }

      redirect(`/`)

}
        
