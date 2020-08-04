<template>
    <div>
        <ion-header>
            <ion-toolbar>
                <ion-title>{{ title }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-item>
                <ion-input></ion-input>
            </ion-item>
        </ion-content>
    </div>
</template>

<script>
export default {
  name: 'Modal',
    props: {
    title: { type: String, default: '请输入会议号' },
  },
  data() {
    return {
      content: 'Content',
    }
  },
}
</script>

<style>

</style>