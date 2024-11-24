const { withAndroidManifest } = require("@expo/config-plugins");

module.exports = function androidManifestPlugin(config) {
  return withAndroidManifest(config, async (config) => {
    let androidManifest = config.modResults.manifest;

    // Ensure uses-permission array exists
    if (!androidManifest["uses-permission"]) {
      androidManifest["uses-permission"] = [];
    }

    const permissions = [
      { $: { "android:name": "android.permission.CAMERA" } },
      { $: { "android:name": "android.permission.READ_EXTERNAL_STORAGE" } },
      { $: { "android:name": "android.permission.WRITE_EXTERNAL_STORAGE" } },
    ];

    // Add permissions if they are not already present
    permissions.forEach(permission => {
      if (!androidManifest["uses-permission"].some(p => p.$["android:name"] === permission.$["android:name"])) {
        androidManifest["uses-permission"].push(permission);
      }
    });

    return config;
  });
};
