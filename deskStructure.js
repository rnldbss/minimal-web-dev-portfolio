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
          orderableDocumentListDeskItem({
            title: "Projects",
            type: "project",
            S,
            context,
          }).child
        ),
      S.listItem()
        .title("Contact")
        .child(S.document().schemaType("contact").documentId("contact")),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["home", "project", "contact", "links"].includes(listItem.getId())
      ),
    ]);
