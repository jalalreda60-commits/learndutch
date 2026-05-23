// babel.config.js
// Expo SDK 51 — Babel configuration for SnowB German AI
module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      // expo preset includes: react-native preset, flow, JSX transform, TS
      'babel-preset-expo',
    ],
    plugins: [
      // ── Path Aliases ────────────────────────────────────────────────────
      // Mirrors tsconfig.json "paths" so runtime resolution matches TS
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@':           './src',
            '@screens':    './src/screens',
            '@components': './src/components',
            '@services':   './src/services',
            '@context':    './src/context',
            '@data':       './src/data',
            '@utils':      './src/utils',
            '@hooks':      './src/hooks',
            '@navigation': './src/navigation',
            '@assets':     './assets',
          },
        },
      ],

      // ── Reanimated — must be listed LAST ────────────────────────────────
      // Required for react-native-reanimated to work correctly
      'react-native-reanimated/plugin',
    ],
  };
};
