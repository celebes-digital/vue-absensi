<template>
	<!-- Menu Group -->
	<nav class="mt-5 px-4 lg:mt-9 lg:px-6">
		<div v-for="item in sidebarItemsAdmin" :key="item.label">
			<h3 class="mb-4 ml-4 text-sm font-medium">{{item.label}}</h3>

			<ul class="mb-6 flex flex-col gap-1">
				<!-- Menu Item -->
				<li v-for="menuItem in item.items" :key="menuItem.label" >
					<RouterLink class="group relative flex items-center gap-2 rounded-sm px-4 py-2 font-medium duration-300 ease-in-out menu"
						:to="menuItem.route"
					>
						<i class="text-lg" :class="menuItem.icon"></i>

						{{menuItem.label}}
					</RouterLink>
				</li>
			</ul>
		</div>
	</nav>

</template>

<script>
export default {
	name:'AdminSidebar',
	inject:['default'],
	data() {
		return {
			sidebarItemsAdmin: [
                {
                    label: 'Home',
                    items: [ { label: 'Dashboard', icon: 'pi pi-home', route: '/admin/dashboard' } ]
                },
                {
                    label: 'Kehadiran',
                    items: [
                        { label: 'Absensi', icon: 'pi pi-check-square', route: '/admin/kehadiran/absensi' },
                        { label: 'Jadwal', icon: 'pi pi-calendar-clock', route: '/admin/kehadiran/jadwal' },
                    ]
                },
                {
                    label: 'Perusahaan',
                    items: [
                        { label: 'Pegawai', icon: 'pi pi-users', route: '/admin/perusahaan/pegawai' },
                        { label: 'Gaji',icon: 'pi pi-wallet', route: '/admin/perusahaan/gaji' },
                        { label: 'Payroll',icon: 'pi pi-credit-card', route: '/admin/perusahaan/payroll' },
                    ]
                },
            ],
		}
	},
	methods: {
	},
	mounted() {
	},
}
</script>