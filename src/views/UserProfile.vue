<template>
  <div>
    <h1>Username</h1>
    <p>{{ username }}</p>
  </div>
</template>

<script>
import { useAxios } from "vue";

export default {
  name: "Username",
  setup() {
    const { data } = useAxios({
      url: "https://django-rest-knox.up.railway.app/api/profile/",
      headers: {
        "Authorization": "Token " + localStorage.getItem("token"),
      },
    });

    return {
      username: data.username,
    };
  },
};
</script>
