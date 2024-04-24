<template>
  <div>
    <h1>Username</h1>
    <p>{{ username }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Username",
  data() {
    return {
      username: "",
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/profile/", {
        headers: {
          "Authorization": "Token " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        this.username = response.data.username;
      });
  },
};
</script>
