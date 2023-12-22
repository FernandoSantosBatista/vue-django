<template>
  <div>
    <h1>User Profile</h1>
    <p>Username: {{ username }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: null,
    };
  },
  mounted() {
    this.fetchUserProfile();
  },
  methods: {
    async fetchUserProfile() {
      try {
        const authToken = localStorage.getItem('token'); // Verifique se a chave é 'token'

        if (!authToken) {
          console.error('Token not found in Local Storage');
          return;
        }

        const response = await fetch('https://django-rest-knox.up.railway.app/api/profile/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${authToken}`, // Use 'Token' ou 'Bearer', dependendo da configuração da sua API
          },
        });

        if (response.ok) {
          const data = await response.json();
          this.username = data.username;
        } else {
          console.error('Failed to fetch user profile');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    },
  },
};
</script>
