<template>
  <iframe
    id="users"
    src="/ord?station:%7Cslot:/Services/UserService"
    name="users"
  ></iframe>
</template>

<script>
export default {};
</script>

<style>
#users {
  overflow: scroll !important;
  margin-top: 30px;
  width: 100%;
  height: 100%;
  height: 85vh;
}
</style>
