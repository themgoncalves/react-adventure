/**
 * React-Adventure
 * @desc Configuration file
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 2.2.0
 */

require('dotenv').config(); // Loads environment variables from a .env file into process.env

module.exports = {
  // project current version
  version: '2.2.0',
  /**
   * Progressive Web Application configuration
   */
  pwa: {
    /**
     * Enable or Disable the PWA
     * Note: Production only
     */
    enabled: true,
    /**
     * Service Worker file name
     */
    serviceWorkerName: 'service-worker.js',
    /**
     * Assets manifest
     */
    assetsManifest: {
      /**
       * Enable or Disable the Assets Manifest
       * Note: Production only
       */
      enabled: false,
      /**
       * Assets manifest file name
       * Please, do not confuse with manifest.json
       */
      fileName: 'assets-manifest.json',
    },
  },
  /**
   * Server Side Render configuration
   */
  ssr: {
    /**
     * Enable or Disable the SSR
     * Note: If disabled, the CSR is enabled automatically.
     */
    enabled: true,
    /**
     * Server Settings
     */
    server: {
      /**
       * http Host alias
       */
      host: process.env.HOST || '127.0.0.1',
      /**
       * http Port
       */
      port: process.env.PORT || '8080',
    },
  },
};
