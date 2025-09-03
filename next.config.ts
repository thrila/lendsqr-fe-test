import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true, // scale to 1em by default
              titleProp: true, // allow <Logo title="..."/>
            },
          },
        ],
        as: "*.js", // treat output as JS module
      },
    },
  },
};

export default nextConfig;
