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
                    "635261c2033aff1e74457b69",
                  title: "Sanity Studio",
                  name: "ny-nettside-gatsby-2022-studio",
                  apiId: "d6fab5f4-963c-4962-97da-0a53544503cd",
                },
                {
                  buildHookId: "635261c10f26921b53828dd0",
                  title: "Blog Website",
                  name: "ny-nettside-gatsby-2022",
                  apiId: "ab732ce3-941a-4b37-945d-eca88fcd612b",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/paalharald/ny-nettside-gatsby-2022",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://ny-nettside-gatsby-2022.netlify.app",
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
