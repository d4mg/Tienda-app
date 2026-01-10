import type { User } from '@/interfaces/user.interface'
import { create } from 'zustand'
import { loginAction } from '../actions/login.action';


type AuthStatus = 'authenticated' | 'not-authenticated' | 'checking';


type AuthState = {
//  Properties del estado de autenticación
user: User | null;
token: string | null;
authStatus: AuthStatus;


// Getters para obtener información del estado de autenticación

// Actions para modificar el estado de autenticación
login: (email: string, password: string) => Promise<boolean>;
logout: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  // Implementación del store
  // Estado inicial
  user: null,
  token: null,
  authStatus:'checking',

  // Actions
  login: async(email: string, password: string) => {
    console.log({email,password})

  try {
    const data =  await loginAction(email, password);
    localStorage.setItem('token',data.token);

    set({ user: data.user, token: data.token});
    return true;

  } catch (error) {
    localStorage.removeItem('token');

    set({ user: null, token: null});
    return false;
  }
},

logout: () => {
  localStorage.removeItem('token');
  set({ user: null, token: null});
}
}))
