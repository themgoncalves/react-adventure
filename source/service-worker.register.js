import * as OfflinePluginRuntime from 'offline-plugin/runtime'; // eslint-disable-line import/no-extraneous-dependencies

OfflinePluginRuntime.install({
  onUpdating: () => {
  },
  onUpdateReady: () => {
    OfflinePluginRuntime.applyUpdate();
  },
  onUpdated: () => {
    window.location.reload();
  },
  onUpdateFailed: () => {
  },
});
