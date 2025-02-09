import { supabase } from '../lib/supabase'
import type { AuthResponse } from '../lib/supabase'

export const authService = {
  async signUp(email: string, password: string): Promise<AuthResponse> {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })
    
    return {
      error,
      success: !error
    }
  },

  async signIn(email: string, password: string): Promise<AuthResponse> {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    return {
      error,
      success: !error
    }
  },

  async signOut(): Promise<AuthResponse> {
    const { error } = await supabase.auth.signOut()
    
    return {
      error,
      success: !error
    }
  }
} 