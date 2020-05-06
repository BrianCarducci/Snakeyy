<template>
    <div>
        <h2>Login with Instagram</h2>
        <button v-on:click="instagramAuthorize">Go!</button>
    </div>
</template>

<script>
export default {
    methods: {
        instagramAuthorize: function() {
            window.location.replace("https://www.instagram.com/oauth/authorize?client_id=270736967654851&redirect_uri=https://snakeyy-5a5bb.firebaseapp.com/#/redirected/&scope=user_profile,user_media&response_type=code")
        }
    }
}
</script>