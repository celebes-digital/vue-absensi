<template>
    <div class="w-full h-dvh flex justify-center items-center bg-[#F1F5F9]">
        <Card class="shadow-md">
            <template #title>
                <div class="">
                    <h1 class="text-3xl">Login</h1>
                    <p class="font-normal text-sm">Masuk kedalam aplikasi absensi</p>
                </div>
            </template>
            <template #content>
                <form id="login" @submit.prevent="login" class="flex flex-col ">
                    <!-- Input for Email -->
                    <FloatLabel variant="in">
                        <InputText
                            class="w-full"
                            inputId="email"
                            v-model="email" 
                            required
                            autofocus
                        />
                        <label for="email">Email</label>
                    </FloatLabel>
                    <small class="text-red-500" v-if="hasValidated && v$.email.$error">
                        {{ v$.email.email ? 'Invalid email format' : 'Email is required' }}
                    </small>
                    <small v-else class="invisible">...</small>

                    <!-- Input for Password -->
                    <FloatLabel variant="in">
                        <Password 
                            v-model="password" 
                            toggleMask 
                            :feedback="false" 
                            inputId="password"
                            required 
                        />
                        <label for="password">Password</label>
                    </FloatLabel>
                    <small class="text-red-500" v-if="hasValidated && v$.password.$error">
                        Password is required
                    </small>
                    <small v-else class="invisible">...</small>

                    <!-- Submit Button -->
                    <Button label="Login" :loading="btnIsLoading" type="submit" />
                </form>
            </template>
        </Card>
    </div>
</template>



<script>
import router from '@/router';
import { useAuthStore } from '@/stores/auth';

export default {
    data() {
        return {
            // Store
            authStore: useAuthStore(),
            // Validation
            v$          : useVuelidate(),
            hasValidated: false,
            // Form
            email       : '',
            password    : '',
            btnIsLoading: false,
        };
    },

    validation() {
        return {
            email   : { required, email },
            password: { required },
        }
    },

    methods: {
        // Login method
        async login() {
            this.v$.$validate();
            this.btnIsLoading = true;
            const data = { email: this.email, password: this.password };
            await this.authStore.login(data)
            if (this.authStore.authLogin == false) {
                this.$toast.add({
                    severity: "error",
                    summary: "Login Gagal",
                    detail: `Pastikan password dan email benar`,
                    life: 3000,
                });
            } else {
                this.$toast.add({
                    severity: "success",
                    summary: "Login Berhasil",
                    detail: `Selamat datang di aplikasi absensi`,
                    life: 3000,
                });
            }

            // this.authStore.userRole == 1 ? router.push({ name: 'admin-dashboard' }) : router.push({ name: 'user-dashboard' })
            this.btnIsLoading = false;
        },

    },
}

</script>