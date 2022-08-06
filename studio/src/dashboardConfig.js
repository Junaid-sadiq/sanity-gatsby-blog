export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62eea678b465cf6581086854",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-wz3j2p1a",
                  apiId: "8a79916f-6beb-4613-ade6-0b34dca207be",
                },
                {
                  buildHookId: "62eea679ac35f8763ad939a2",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-5na9gouq",
                  apiId: "b12e63fb-97d2-4927-a061-97a808ed21a8",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Junaid-sadiq/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-5na9gouq.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
