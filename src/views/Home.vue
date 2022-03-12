<template>
  <div class="home">
    <img
      src="@/assets/firebase.png"
      alt="firebase logo"
      title="firebase logo"
      width="80px"
    />
    <h1>Firebase push notifications</h1>
    <div v-if="notifications.length === 0" class="empty-message">
      Nenhuma notificação foi adicionada :(
    </div>
    <div
      v-for="(notification, i) in notifications"
      :key="i"
      class="notification"
    >
      <h2 v-if="notification.title">{{ notification.title }}</h2>
      <span v-if="notification.body">{{ notification.body }}</span>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'Home',
    computed: {
      ...mapGetters(['notifications']),
    },
  };
</script>

<style lang="scss">
  * {
    margin: 0px;
  }

  h2 {
    margin-bottom: 8px;
  }

  .home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  img {
    margin-bottom: 18px;
  }

  .empty-message {
    margin-top: 18px;
    color: #c2c2c2;
  }

  .notification {
    margin-top: 28px;
    padding: 30px 20px;
    width: 200px;
    font-weight: bold;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.1s ease-in;

    &:hover {
      font-size: 18px;
    }

    &:nth-child(odd) {
      background: orange;
      box-shadow: 0px 0px 8px 3px rgba($color: orange, $alpha: 0.6);

      &:hover {
        box-shadow: 0px 0px 8px 5px rgba($color: orange, $alpha: 0.8);
      }
    }

    &:nth-child(even) {
      background: darkorange;
      box-shadow: 0px 0px 8px 3px rgba($color: darkorange, $alpha: 0.6);
      &:hover {
        box-shadow: 0px 0px 8px 5px rgba($color: darkorange, $alpha: 0.8);
      }
    }
  }
</style>
