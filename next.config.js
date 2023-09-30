/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["10.10.3.60"],
  },
  async headers() {
    return [
      {
        source: "/favicon.ico",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, immutable",
          },
        ],
      },
    ];
  },
};
