// const CracoAlias = require("craco-alias");

// module.exports = {
//   plugins: [
//     {
//       plugin: CracoAlias,
//       options: {
//         source: "tsconfig",
//         tsConfigPath: "tsconfig.paths.json",
//       },
//     },
//   ],
// };

module.exports = {
  babel: {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            node: "current",
          },
        },
      ],
    ],
  },
};
