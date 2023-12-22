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
      .get("https://django-rest-knox.up.railway.app/api/profile/", {
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
