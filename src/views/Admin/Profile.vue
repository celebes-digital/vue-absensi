<template>
	
	<div class="grid grid-cols-12 gap-5 h-dvh m-5" v-if="isLoading">
		<div class="col-span-12 w-full flex justify-center items-center">
			<ProgressSpinner />
        </div>
	</div>
	
	<div class="grid grid-cols-12 m-5 mb-24 lg:mb-5" v-else>
		<PageHeader title="Profile" class="mb-5" />
		<Card class="col-span-12 shadow-md">
			<template #title>
				<h2 class="mb-5">
					Admin Profile
				</h2>
			</template>
			<template #content>
				<div class="flex flex-col gap-5">
					<div class="grid grid-cols-12 gap-2">
						<div class="col-span-12 md:col-span-6 flex items-center gap-5">
							<Image src="/src/assets/app-logo.png" :alt="user.nama_lengkap" class="w-32 border border-white shadow-md items-center justify-center rounded-full" />
							<div>
								<p class="text-xl font-bold">{{ user.nama_lengkap ?? 'Muh. Mahatma Arrayyan' }}</p>
								<p class="text-xl">{{ user.jabatan ?? 'Frontend Dev' }}</p>
								<p class="text-base font-light">{{ user.alamat ?? 'Jl. Pendidikan Blok B5 No.08' }}</p>
							</div>
						</div>
						<div class="col-span-12 md:col-span-6 flex items-center gap-3 justify-center">
							<!-- <FileUpload ref="fileupload" mode="basic" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000" @upload="onUpload" /> -->
							<!-- <FileUpload mode="basic" class="py-3 px-4" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000" @upload="onUpload" :auto="true" chooseLabel="Foto Profil" /> -->
							<Button label="Hapus Foto" class="py-3 px-4" outlined severity="danger"></Button>
						</div>
					</div>

					<!-- <Divider /> -->

					<Tabs value="0" scrollable>
						<TabList>
							<Tab value="0">Ganti Password</Tab>
							<Tab value="1">Jadwal Kerja Umum</Tab>
						</TabList>
						<TabPanels>
							<TabPanel class="mt-5" value="0">
								<form class="w-full flex gap-2">
									<FloatLabel variant="in">
										<Password 
											v-model="password" 
											toggleMask 
											:feedback="false" 
											inputId="password"
											required 
										/>
										<label for="password">Password Lama</label>
									</FloatLabel>
									<FloatLabel variant="in">
										<Password 
											v-model="password_baru" 
											toggleMask 
											:feedback="false" 
											inputId="passwordBaru"
											required 
										/>
										<label for="password_baru">Password Baru</label>
									</FloatLabel>
									<Button icon="pi pi-plus-circle" label="Ganti Password"></Button>
								</form>
							</TabPanel>

							<TabPanel class="mt-5" value="1">
								<Button icon="pi pi-plus-circle" label="Tambah" @click="toggleJadwalKerja()"></Button>
							</TabPanel>

						</TabPanels>
					</Tabs>

				</div>
			</template>
		</Card>
	</div>

	<DialogJadwalKerja :visible="visibleJadwalKerja" @toggle="toggleJadwalKerja" :is_default="true" />

</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import { useAuthStore } from '@/stores/auth';

export default {
	name:'Profile',
	inject:['default'],
	data() {
		return {
			isAdmin: 0,
			authStore: useAuthStore(),
			isLoading: true,
			user: [],
			editPegawaiData: [],
			avatar: '',
            // Validation
            v$: useVuelidate(),
            hasValidated: false,
			password: '',
            // Form
            no: 1,
            formPost:false,

			jadwalKerja: '',
			columns: [
				{ field: 'nama_jadwal', header: 'Nama Jadwal' },
				{ field: 'jadwal.hari', header: 'Hari' },
			],
			visibleJadwalKerja	: false,
		}
	},
	methods: {
		toggleJadwalKerja() {
			this.visibleJadwalKerja = !this.visibleJadwalKerja;
		},
	},
	mounted() {
		this.isAdmin ? this.getUser() : this.isLoading = false
	},
}
</script>

<style>
.p-tabpanels{
	padding: 0;
}
</style>