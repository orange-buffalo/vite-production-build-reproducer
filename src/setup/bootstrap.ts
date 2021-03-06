import type { SimpleAccountingInitializer } from '@/setup/setup-app';
import { removeLoader } from '@/setup/loader';

async function resolveDeferredAndSetupApp(setupAppDeferred: Promise<{ default: SimpleAccountingInitializer }>) {
  const {
    default: {
      app,
      setupApp,
      mountApp,
    },
  } = await setupAppDeferred;
  setupApp();
  return ({
    app,
    mountApp,
  });
}

export async function bootstrapApp() {
  console.log('boostraping');

  const setupAppDeferred = import('@/setup/setup-app');

  console.log('setup app iniitated');

  const { useAuth } = await import('@/services/api');
  const { tryAutoLogin } = useAuth();
  const targetRoute = window.location.pathname;

  console.log('auth loaded');

  const { i18n } = await import('@/services/i18n');
  await i18n.setLocaleFromProfile('en', 'en');
  console.log(i18n.t('common.date.medium', [new Date()]));

  // TODO
  if (targetRoute.includes('login-by-link')) {
    const { app, mountApp } = await resolveDeferredAndSetupApp(setupAppDeferred);
    // await app.i18n.setLocaleFromBrowser();
    // if (app.router.currentRoute.path !== targetRoute) {
    //   await app.router.push(targetRoute);
    // }
    // mountApp();
  } else if (await tryAutoLogin()) {
    // const { app, mountApp } = await resolveDeferredAndSetupApp(setupAppDeferred);
    //
    // const { userApi } = await import(/* webpackChunkName: "user-api" */ '@/services/user-api');
    // const profile = await userApi.getProfile();
    // await app.i18n.setLocaleFromProfile(profile.i18n);
    //
    // if (app.router.currentRoute.path !== targetRoute) {
    //   await app.router.push(targetRoute);
    // }
    //
    // const { initWorkspace } = await import(/* webpackChunkName: "workspaces" */ '@/services/workspaces');
    // await initWorkspace();
    //
    // mountApp();
  } else {
    // const { app, mountApp } = await resolveDeferredAndSetupApp(setupAppDeferred);
    // await app.i18n.setLocaleFromBrowser();
    // if (app.router.currentRoute.path !== '/login') {
    //   await app.router.push({ name: 'login' });
    // }
    // mountApp();
  }

  removeLoader();
}
