/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    relay: {
      artifactDirectory: "./.relay",
      eagerEsModules: true,
      language: "typescript",
      schema: "./schema.graphql",
      src: "./src",
      useImportTypeSyntax: true,
    },
  },
};

export default nextConfig;
