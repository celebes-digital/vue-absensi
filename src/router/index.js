import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth';

const routes = [
	{
		path: '/:pathMatch(.*)*',
		name: 'not-found',
		component: () => import('../views/NotFound.vue')
	},
	{
		path: '/reset-password',
		name: 'reset-password',
		component: () => import('../views/ResetPassword.vue')
	},
	{
		path: '/',
		name: 'home',
		component: () => import('../views/Home.vue')
	},
	// ? Login
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/Login.vue')
	},

	// Group User
	{
		path: '/user',
		name: 'user',
		component: () => import('../shell/UserDashboardShell.vue'),
		meta: { requiresAuth: true, role: 0 },
		children: [
			// ? Dashboard
			{
				path: '/dashboard',
				name: 'dashboard',
				component: () => import('../views/Dashboard.vue'),
			},
			// ? User
			{
				path: '/user/profile',
				name: 'user-profile',
				component: () => import('../views/User/Profile.vue')
			},
			{
				path: '/user/settings',
				name: 'user-settings',
				component: () => import('../views/User/Settings.vue')
			},
			// ? Absensi
			{
				path: '/kehadiran/qr-code',
				name: 'kehadiran-qr-code',
				component: () => import('../views/Kehadiran/QrCode.vue')
			},
			{
				path: '/kehadiran/absensi',
				name: 'kehadiran-absensi',
				component: () => import('../views/Kehadiran/Absensi.vue')
			},
			{
				path: '/kehadiran/shift-kerja',
				name: 'shift-kerja',
				component: () => import('../views/Kehadiran/ShiftKerja.vue')
			},
			// ? Kerjaan
			{
				path: '/kerjaan/workspaces',
				name: 'workspaces',
				component: () => import('../views/Kerjaan/Workspaces.vue')
			},
			{
				path: '/kerjaan/kanban',
				name: 'kanban',
				component: () => import('../views/Kerjaan/Kanban.vue')
			},

		],
	},

	// Group Admin
	{
		path: '/admin/',
		name: 'admin',
		component: () => import('../shell/AdminDashboardShell.vue'),
		meta: { requiresAuth: true, role: 1 }, 
		children: [
			{
				path: 'dashboard',
				name: 'admin-dashboard',
				component: () => import('../views/Admin/Dashboard.vue'),
			},
			// ? Pegawai
			{
				path: 'perusahaan/pegawai',
				name: 'admin-pegawai',
				component: () => import('../views/Admin/Perusahaan/Pegawai.vue')
			},
			// ? Gaji
			{
				path: 'perusahaan/gaji',
				name: 'admin-gaji',
				component: () => import('../views/Admin/Perusahaan/Gaji.vue')
			},
			// ? Payroll
			{
				path: 'perusahaan/payroll',
				name: 'admin-payroll',
				component: () => import('../views/Admin/Perusahaan/Payroll.vue')
			},
			{
				path: 'kehadiran/absensi',
				name: 'kehadiran-absensi',
				component: () => import('../views/Admin/Kehadiran/Absensi.vue')
			},
			{
				path: 'kehadiran/shift-kerja',
				name: 'shift-kerja',
				component: () => import('../views/Admin/Kehadiran/ShiftKerja.vue')
			},
		]
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

// Global navigation guard
router.beforeEach(async (to, from, next) => {
	const authStore = useAuthStore();

	// Attempt to get the token from local storage if not present in state
	if (!authStore.authToken) {
		await authStore.getToken();
	}

	// Check if the route requires authentication
	if (to.meta.requiresAuth && !authStore.authToken) {
		try {
			await authStore.getUser();
		} catch (error) {
			return next({ name: 'login' });
		}
	}

	// Role-based access control
	if (to.meta.role) {
		// Check if the user's role matches the required role
		if (authStore.userRole !== to.meta.role) {
			return next({ name: 'not-found' }); // Redirect to a not-found page or another route
		}
	}

	next();
});

export default router
