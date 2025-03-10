import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

export const structure = (S, context) =>
  S.list()
    .title("Content")

    .items([
      S.listItem()
        .title("Home")
        .child(S.document().schemaType("home").documentId("home")),
      S.listItem()
  .title("Projects")
  .child(
    S.list()
      .title("Projects")
      .items([
        S.listItem()
          .title("Projects Page")
          .child(
            S.document()
              .schemaType("projectsPage") // your singleton schema
              .documentId("projectsPage") // give it a fixed ID
          ),

        orderableDocumentListDeskItem({
          title: "Projects List",
          type: "project",
          S,
          context,
        }),
      ])
  ),
      S.listItem()
        .title("Contact")
        .child(S.document().schemaType("contact").documentId("contact")),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["home", "project", "contact", "links", 'projectsPage'].includes(listItem.getId())
      ),
    ]);
