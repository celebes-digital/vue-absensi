<template>
    <ConfirmPopup></ConfirmPopup>
    <Toast />
    <RouterView></RouterView>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            default: {
                title: "ABSENSI QR CODE",
                image: "http://127.0.0.1:8000/storage/",
            },
        };
    },
    provide() {
        return {
            default: this.default,
        };
    },
};
</script>

<style></style>
