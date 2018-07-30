/**
 * React-Adventure
 * @desc Configuration file
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 2.1.0
 */
module.exports = {
  // project current version
  version: '2.1.0',
  /**
   * Progressive Web Application configuration
   */
  pwa: {
    // enable or disable the PWA
    enabled: false,
    // service worker file name
    serviceWorkerName: 'service-worker.js',
    /**
     * Assets manifest
     */
    assetsManifest: {
      // enable or disable the assets manifest
      enabled: false,
      /**
       * Assets manifest file name
       * Please, do not confuse with manifest.json
       */
      fileName: 'asset-manifest.json',
    },
  },
};
