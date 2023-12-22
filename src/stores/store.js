import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore({
  id: "users",
  state: () => ({
    username: "",
    password: "",
    token: localStorage.getItem("token", token),
    isLoggedIn: false,
  }),
  actions: {
    async login({ username, password }) {
      try {
        // Faça uma solicitação HTTP POST para a API REST de login
        const response = await axios.post("/api/auth/login/", {
          username: username,
          password: password,
        });

        // Obtenha o token da resposta
        const data = response.data;
        const token = data.token;

        // Chame a função setToken definida no contexto das ações
        this.setToken(token);

        // Defina o estado de isLoggedIn como true
        this.isLoggedIn = true;
      } catch (error) {
        console.error("Erro no login:", error);
        // Se houver um erro, você pode tratar de acordo com as necessidades do seu aplicativo
      }
    },

    // Adicione a função setToken no contexto das ações
    setToken(token) {
      // Lógica para armazenar o token, por exemplo, em localStorage
      // Adaptar conforme necessário para as necessidades específicas do seu aplicativo
      localStorage.setItem("token", token);
    },
  },
});
