<template>
  <div class="login-form">
    <h1>Login</h1>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="username" placeholder="Usuário">
      <input type="password" v-model="password" placeholder="Senha">
      <button type="submit">Login</button>
      token: {{ token }}
    </form>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useAuthStore } from "../stores/store";
export default {
  name: "LoginView",
  token: localStorage.getItem("token", token),
  
  methods: {
  ...mapActions(useAuthStore, ["login"]),

  onSubmit() {
    this.login({ username: this.username, password: this.password });
  },
},
};
</script>
