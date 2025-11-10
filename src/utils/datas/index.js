const datas = [
  {
    "id": 1,
    "name": "ESATIC",
    "type": "Publique",
    "commune": "Cocody",
    "stateSupport": "Oui",
    "priceLevel": "Abordable",
    "logo": "https://esatic.ci/wp-content/uploads/2024/07/esatic_logo.jpg",
    "longitude": "-4.0123",
    "latitude": "5.3456",
    "createdAt": "2025-10-15T11:39:51.456Z",
    "updatedAt": "2025-10-15T11:39:51.456Z",
    "filieres": [
      { "id": 1, "name": "Informatique", "schoolId": 1, "createdAt": "2025-10-15T11:39:51.456Z", "updatedAt": "2025-10-15T11:39:51.456Z" },
      { "id": 2, "name": "Télécommunications", "schoolId": 1, "createdAt": "2025-10-15T11:39:51.456Z", "updatedAt": "2025-10-15T11:39:51.456Z" },
      { "id": 3, "name": "Cybersecurity", "schoolId": 1, "createdAt": "2025-10-15T11:39:51.456Z", "updatedAt": "2025-10-15T11:39:51.456Z" }
    ],
    "reviews": [
      {
        "id": 1,
        "userId": 4,
        "schoolId": 1,
        "comment": "Les cours théoriques sont excellents, mais les frais un peu élevés",
        "createdAt": "2025-10-16T14:32:09.203Z",
        "updatedAt": "2025-10-16T14:32:09.203Z",
        "scores": [
          {
            "id": 1,
            "reviewId": 1,
            "criteriaId": 1,
            "value": "Très bien",
            "createdAt": "2025-10-16T14:32:09.203Z",
            "updatedAt": "2025-10-16T14:32:09.203Z",
            "criteria": { "id": 1, "label": "Cours théoriques", "icon": null, "createdAt": "2025-10-15T14:41:49.544Z", "updatedAt": "2025-10-15T14:41:49.544Z" }
          },
          {
            "id": 2,
            "reviewId": 1,
            "criteriaId": 2,
            "value": "Bien",
            "createdAt": "2025-10-16T14:32:09.203Z",
            "updatedAt": "2025-10-16T14:32:09.203Z",
            "criteria": { "id": 2, "label": "Cours pratiques", "icon": null, "createdAt": "2025-10-15T14:42:58.237Z", "updatedAt": "2025-10-15T14:42:58.237Z" }
          },
          {
            "id": 3,
            "reviewId": 1,
            "criteriaId": 3,
            "value": "Bien",
            "createdAt": "2025-10-16T14:32:09.203Z",
            "updatedAt": "2025-10-16T14:32:09.203Z",
            "criteria": { "id": 3, "label": "Cadre étudiant", "icon": null, "createdAt": "2025-10-15T14:43:13.208Z", "updatedAt": "2025-10-15T14:43:13.208Z" }
          },
          {
            "id": 4,
            "reviewId": 1,
            "criteriaId": 4,
            "value": "Moyen",
            "createdAt": "2025-10-16T14:32:09.203Z",
            "updatedAt": "2025-10-16T14:32:09.203Z",
            "criteria": { "id": 4, "label": "Frais Scolaire", "icon": null, "createdAt": "2025-10-15T14:43:35.951Z", "updatedAt": "2025-10-15T14:43:35.951Z" }
          }
        ]
      }
    ]
  },

  {
    "id": 2,
    "name": "ENSIT",
    "type": "Publique",
    "commune": "Cocody",
    "stateSupport": "Oui",
    "priceLevel": "Moyenne",
    "logo": "https://ensit.ci/wp-content/uploads/2024/04/cropped-logo-ensitok.png",
    "longitude": "-4.0032",
    "latitude": "5.3398",
    "createdAt": "2025-10-15T12:17:20.998Z",
    "updatedAt": "2025-10-15T12:18:35.892Z",
    "filieres": [
      { "id": 10, "name": "Informatique", "schoolId": 4, "createdAt": "2025-10-15T12:17:20.998Z", "updatedAt": "2025-10-15T12:17:20.998Z" },
      { "id": 11, "name": "Télécommunications", "schoolId": 4, "createdAt": "2025-10-15T12:17:20.998Z", "updatedAt": "2025-10-15T12:17:20.998Z" },
      { "id": 12, "name": "Cybersecurity", "schoolId": 4, "createdAt": "2025-10-15T12:17:20.998Z", "updatedAt": "2025-10-15T12:17:20.998Z" }
    ],
    "reviews": []
  },

  {
    "id": 3,
    "name": "Université Nangui Abrogoua",
    "type": "Publique",
    "commune": "Abobo",
    "stateSupport": "Oui",
    "priceLevel": "Moyenne",
    "logo": "https://upload.wikimedia.org/wikipedia/fr/1/15/Logotype_Universit%C3%A9_Nangui_Abrogoua.png",
    "longitude": "-4.0205",
    "latitude": "5.4002",
    "createdAt": "2025-10-17T09:22:10.000Z",
    "updatedAt": "2025-10-17T09:22:10.000Z",
    "filieres": [
      { "id": 13, "name": "Biologie", "schoolId": 5, "createdAt": "2025-10-17T09:22:10.000Z", "updatedAt": "2025-10-17T09:22:10.000Z" },
      { "id": 14, "name": "Chimie", "schoolId": 5, "createdAt": "2025-10-17T09:22:10.000Z", "updatedAt": "2025-10-17T09:22:10.000Z" }
    ],
    "reviews": [
      {
        "id": 2,
        "userId": 6,
        "schoolId": 5,
        "comment": "Les professeurs sont passionnés et disponibles.",
        "createdAt": "2025-10-18T10:05:43.000Z",
        "updatedAt": "2025-10-18T10:05:43.000Z",
        "scores": [
          {
            "id": 5,
            "reviewId": 2,
            "criteriaId": 1,
            "value": "Très bien",
            "createdAt": "2025-10-18T10:05:43.000Z",
            "updatedAt": "2025-10-18T10:05:43.000Z",
            "criteria": { "id": 1, "label": "Cours théoriques", "icon": null, "createdAt": "2025-10-15T14:41:49.544Z", "updatedAt": "2025-10-15T14:41:49.544Z" }
          },
          {
            "id": 6,
            "reviewId": 2,
            "criteriaId": 3,
            "value": "Très bien",
            "createdAt": "2025-10-18T10:05:43.000Z",
            "updatedAt": "2025-10-18T10:05:43.000Z",
            "criteria": { "id": 3, "label": "Cadre étudiant", "icon": null, "createdAt": "2025-10-15T14:43:13.208Z", "updatedAt": "2025-10-15T14:43:13.208Z" }
          },
          {
            "id": 3,
            "reviewId": 2,
            "criteriaId": 3,
            "value": "Bien",
            "createdAt": "2025-10-16T14:32:09.203Z",
            "updatedAt": "2025-10-16T14:32:09.203Z",
            "criteria": { "id": 3, "label": "Cadre étudiant", "icon": null, "createdAt": "2025-10-15T14:43:13.208Z", "updatedAt": "2025-10-15T14:43:13.208Z" }
          },
          {
            "id": 2,
            "reviewId": 1,
            "criteriaId": 4,
            "value": "Moyen",
            "createdAt": "2025-10-16T14:32:09.203Z",
            "updatedAt": "2025-10-16T14:32:09.203Z",
            "criteria": { "id": 4, "label": "Frais Scolaire", "icon": null, "createdAt": "2025-10-15T14:43:35.951Z", "updatedAt": "2025-10-15T14:43:35.951Z" }
          }
        ]
      }
    ]
  },

  {
    "id": 4,
    "name": "UPB",
    "type": "Privée",
    "commune": "Bingerville",
    "stateSupport": "Oui",
    "priceLevel": "Trop chère",
    "logo": "https://upb.ci/web/image/15899-066a98c3/2O4A7455.webp",
    "longitude": "-4.0145",
    "latitude": "5.3209",
    "createdAt": "2025-10-17T09:50:00.000Z",
    "updatedAt": "2025-10-17T09:50:00.000Z",
    "filieres": [
      { "id": 15, "name": "Gestion", "schoolId": 6, "createdAt": "2025-10-17T09:50:00.000Z", "updatedAt": "2025-10-17T09:50:00.000Z" },
      { "id": 16, "name": "Comptabilité", "schoolId": 6, "createdAt": "2025-10-17T09:50:00.000Z", "updatedAt": "2025-10-17T09:50:00.000Z" }
    ],
    "reviews": [
      {
        "id": 3,
        "userId": 7,
        "schoolId": 6,
        "comment": "Bonne école mais un peu chère.",
        "createdAt": "2025-10-18T15:20:30.000Z",
        "updatedAt": "2025-10-18T15:20:30.000Z",
        "scores": [
          {
            "id": 7,
            "reviewId": 3,
            "criteriaId": 4,
            "value": "Mauvais",
            "createdAt": "2025-10-18T15:20:30.000Z",
            "updatedAt": "2025-10-18T15:20:30.000Z",
            "criteria": { "id": 4, "label": "Frais Scolaire", "icon": null, "createdAt": "2025-10-15T14:43:35.951Z", "updatedAt": "2025-10-15T14:43:35.951Z" }
          },
          {
            "id": 2,
            "reviewId": 1,
            "criteriaId": 2,
            "value": "Bien",
            "createdAt": "2025-10-16T14:32:09.203Z",
            "updatedAt": "2025-10-16T14:32:09.203Z",
            "criteria": { "id": 2, "label": "Cours pratiques", "icon": null, "createdAt": "2025-10-15T14:42:58.237Z", "updatedAt": "2025-10-15T14:42:58.237Z" }
          },
          {
            "id": 3,
            "reviewId": 1,
            "criteriaId": 3,
            "value": "Bien",
            "createdAt": "2025-10-16T14:32:09.203Z",
            "updatedAt": "2025-10-16T14:32:09.203Z",
            "criteria": { "id": 3, "label": "Cadre étudiant", "icon": null, "createdAt": "2025-10-15T14:43:13.208Z", "updatedAt": "2025-10-15T14:43:13.208Z" }
          },
          {
            "id": 4,
            "reviewId": 1,
            "criteriaId": 4,
            "value": "Moyen",
            "createdAt": "2025-10-16T14:32:09.203Z",
            "updatedAt": "2025-10-16T14:32:09.203Z",
            "criteria": { "id": 4, "label": "Cour théoriques", "icon": null, "createdAt": "2025-10-15T14:43:35.951Z", "updatedAt": "2025-10-15T14:43:35.951Z" }
          }
        ]
      }
    ]
  },

  {
    "id": 5,
    "name": "ESATIC",
    "type": "Publique",
    "commune": "Cocody",
    "stateSupport": "Oui",
    "priceLevel": "Abordable",
    "logo": "https://esatic.ci/wp-content/uploads/2024/07/esatic_logo.jpg",
    "longitude": "-4.0123",
    "latitude": "5.3456",
    "createdAt": "2025-10-15T11:39:51.456Z",
    "updatedAt": "2025-10-15T11:39:51.456Z",
    "filieres": [
      { "id": 1, "name": "Informatique", "schoolId": 1, "createdAt": "2025-10-15T11:39:51.456Z", "updatedAt": "2025-10-15T11:39:51.456Z" },
      { "id": 2, "name": "Télécommunications", "schoolId": 1, "createdAt": "2025-10-15T11:39:51.456Z", "updatedAt": "2025-10-15T11:39:51.456Z" },
      { "id": 3, "name": "Cybersecurity", "schoolId": 1, "createdAt": "2025-10-15T11:39:51.456Z", "updatedAt": "2025-10-15T11:39:51.456Z" }
    ],
    "reviews": [
      {
        "id": 1,
        "userId": 4,
        "schoolId": 1,
        "comment": "Les cours théoriques sont excellents, mais les frais un peu élevés",
        "createdAt": "2025-10-16T14:32:09.203Z",
        "updatedAt": "2025-10-16T14:32:09.203Z",
        "scores": [
          {
            "id": 1,
            "reviewId": 1,
            "criteriaId": 1,
            "value": "Très bien",
            "createdAt": "2025-10-16T14:32:09.203Z",
            "updatedAt": "2025-10-16T14:32:09.203Z",
            "criteria": { "id": 1, "label": "Cours théoriques", "icon": null, "createdAt": "2025-10-15T14:41:49.544Z", "updatedAt": "2025-10-15T14:41:49.544Z" }
          },
          {
            "id": 2,
            "reviewId": 1,
            "criteriaId": 2,
            "value": "Bien",
            "createdAt": "2025-10-16T14:32:09.203Z",
            "updatedAt": "2025-10-16T14:32:09.203Z",
            "criteria": { "id": 2, "label": "Cours pratiques", "icon": null, "createdAt": "2025-10-15T14:42:58.237Z", "updatedAt": "2025-10-15T14:42:58.237Z" }
          },
          {
            "id": 3,
            "reviewId": 1,
            "criteriaId": 3,
            "value": "Bien",
            "createdAt": "2025-10-16T14:32:09.203Z",
            "updatedAt": "2025-10-16T14:32:09.203Z",
            "criteria": { "id": 3, "label": "Cadre étudiant", "icon": null, "createdAt": "2025-10-15T14:43:13.208Z", "updatedAt": "2025-10-15T14:43:13.208Z" }
          },
          {
            "id": 4,
            "reviewId": 1,
            "criteriaId": 4,
            "value": "Moyen",
            "createdAt": "2025-10-16T14:32:09.203Z",
            "updatedAt": "2025-10-16T14:32:09.203Z",
            "criteria": { "id": 4, "label": "Frais Scolaire", "icon": null, "createdAt": "2025-10-15T14:43:35.951Z", "updatedAt": "2025-10-15T14:43:35.951Z" }
          }
        ]
      }
    ]
  },

  {
    "id": 6,
    "name": "ENSIT",
    "type": "Publique",
    "commune": "Cocody",
    "stateSupport": "Oui",
    "priceLevel": "Trop chère",
    "logo": "https://ensit.ci/wp-content/uploads/2024/04/cropped-logo-ensitok.png",
    "longitude": "-4.0032",
    "latitude": "5.3398",
    "createdAt": "2025-10-15T12:17:20.998Z",
    "updatedAt": "2025-10-15T12:18:35.892Z",
    "filieres": [
      { "id": 10, "name": "Informatique", "schoolId": 4, "createdAt": "2025-10-15T12:17:20.998Z", "updatedAt": "2025-10-15T12:17:20.998Z" },
      { "id": 11, "name": "Télécommunications", "schoolId": 4, "createdAt": "2025-10-15T12:17:20.998Z", "updatedAt": "2025-10-15T12:17:20.998Z" },
      { "id": 12, "name": "Cybersecurity", "schoolId": 4, "createdAt": "2025-10-15T12:17:20.998Z", "updatedAt": "2025-10-15T12:17:20.998Z" }
    ],
    "reviews": []
  },

  {
    "id": 7,
    "name": "Université Nangui Abrogoua",
    "type": "Publique",
    "commune": "Abobo",
    "stateSupport": "Oui",
    "priceLevel": "Moyenne",
    "logo": "https://upload.wikimedia.org/wikipedia/fr/1/15/Logotype_Universit%C3%A9_Nangui_Abrogoua.png",
    "longitude": "-4.0205",
    "latitude": "5.4002",
    "createdAt": "2025-10-17T09:22:10.000Z",
    "updatedAt": "2025-10-17T09:22:10.000Z",
    "filieres": [
      { "id": 13, "name": "Biologie", "schoolId": 5, "createdAt": "2025-10-17T09:22:10.000Z", "updatedAt": "2025-10-17T09:22:10.000Z" },
      { "id": 14, "name": "Chimie", "schoolId": 5, "createdAt": "2025-10-17T09:22:10.000Z", "updatedAt": "2025-10-17T09:22:10.000Z" }
    ],
    "reviews": [
      {
        "id": 2,
        "userId": 6,
        "schoolId": 5,
        "comment": "Les professeurs sont passionnés et disponibles.",
        "createdAt": "2025-10-18T10:05:43.000Z",
        "updatedAt": "2025-10-18T10:05:43.000Z",
        "scores": [
          {
            "id": 5,
            "reviewId": 2,
            "criteriaId": 1,
            "value": "Très bien",
            "createdAt": "2025-10-18T10:05:43.000Z",
            "updatedAt": "2025-10-18T10:05:43.000Z",
            "criteria": { "id": 1, "label": "Cours théoriques", "icon": null, "createdAt": "2025-10-15T14:41:49.544Z", "updatedAt": "2025-10-15T14:41:49.544Z" }
          },
          {
            "id": 6,
            "reviewId": 2,
            "criteriaId": 3,
            "value": "Très bien",
            "createdAt": "2025-10-18T10:05:43.000Z",
            "updatedAt": "2025-10-18T10:05:43.000Z",
            "criteria": { "id": 3, "label": "Cadre étudiant", "icon": null, "createdAt": "2025-10-15T14:43:13.208Z", "updatedAt": "2025-10-15T14:43:13.208Z" }
          },
          {
            "id": 3,
            "reviewId": 2,
            "criteriaId": 3,
            "value": "Bien",
            "createdAt": "2025-10-16T14:32:09.203Z",
            "updatedAt": "2025-10-16T14:32:09.203Z",
            "criteria": { "id": 3, "label": "Cadre étudiant", "icon": null, "createdAt": "2025-10-15T14:43:13.208Z", "updatedAt": "2025-10-15T14:43:13.208Z" }
          },
          {
            "id": 2,
            "reviewId": 1,
            "criteriaId": 4,
            "value": "Moyen",
            "createdAt": "2025-10-16T14:32:09.203Z",
            "updatedAt": "2025-10-16T14:32:09.203Z",
            "criteria": { "id": 4, "label": "Frais Scolaire", "icon": null, "createdAt": "2025-10-15T14:43:35.951Z", "updatedAt": "2025-10-15T14:43:35.951Z" }
          }
        ]
      }
    ]
  },

  {
    "id": 8,
    "name": "ESATIC",
    "type": "Publique",
    "commune": "Cocody",
    "stateSupport": "Oui",
    "priceLevel": "Abordable",
    "logo": "https://esatic.ci/wp-content/uploads/2024/07/esatic_logo.jpg",
    "longitude": "-4.0123",
    "latitude": "5.3456",
    "createdAt": "2025-10-15T11:39:51.456Z",
    "updatedAt": "2025-10-15T11:39:51.456Z",
    "filieres": [
      { "id": 1, "name": "Informatique", "schoolId": 1, "createdAt": "2025-10-15T11:39:51.456Z", "updatedAt": "2025-10-15T11:39:51.456Z" },
      { "id": 2, "name": "Télécommunications", "schoolId": 1, "createdAt": "2025-10-15T11:39:51.456Z", "updatedAt": "2025-10-15T11:39:51.456Z" },
      { "id": 3, "name": "Cybersecurity", "schoolId": 1, "createdAt": "2025-10-15T11:39:51.456Z", "updatedAt": "2025-10-15T11:39:51.456Z" }
    ],
    "reviews": [
      {
        "id": 1,
        "userId": 4,
        "schoolId": 1,
        "comment": "Les cours théoriques sont excellents, mais les frais un peu élevés",
        "createdAt": "2025-10-16T14:32:09.203Z",
        "updatedAt": "2025-10-16T14:32:09.203Z",
        "scores": [
          {
            "id": 1,
            "reviewId": 1,
            "criteriaId": 1,
            "value": "Très bien",
            "createdAt": "2025-10-16T14:32:09.203Z",
            "updatedAt": "2025-10-16T14:32:09.203Z",
            "criteria": { "id": 1, "label": "Cours théoriques", "icon": null, "createdAt": "2025-10-15T14:41:49.544Z", "updatedAt": "2025-10-15T14:41:49.544Z" }
          },
          {
            "id": 2,
            "reviewId": 1,
            "criteriaId": 2,
            "value": "Bien",
            "createdAt": "2025-10-16T14:32:09.203Z",
            "updatedAt": "2025-10-16T14:32:09.203Z",
            "criteria": { "id": 2, "label": "Cours pratiques", "icon": null, "createdAt": "2025-10-15T14:42:58.237Z", "updatedAt": "2025-10-15T14:42:58.237Z" }
          },
          {
            "id": 3,
            "reviewId": 1,
            "criteriaId": 3,
            "value": "Bien",
            "createdAt": "2025-10-16T14:32:09.203Z",
            "updatedAt": "2025-10-16T14:32:09.203Z",
            "criteria": { "id": 3, "label": "Cadre étudiant", "icon": null, "createdAt": "2025-10-15T14:43:13.208Z", "updatedAt": "2025-10-15T14:43:13.208Z" }
          },
          {
            "id": 4,
            "reviewId": 1,
            "criteriaId": 4,
            "value": "Moyen",
            "createdAt": "2025-10-16T14:32:09.203Z",
            "updatedAt": "2025-10-16T14:32:09.203Z",
            "criteria": { "id": 4, "label": "Frais Scolaire", "icon": null, "createdAt": "2025-10-15T14:43:35.951Z", "updatedAt": "2025-10-15T14:43:35.951Z" }
          }
        ]
      }
    ]
  },

  {
    "id": 9,
    "name": "ENSIT",
    "type": "Publique",
    "commune": "Cocody",
    "stateSupport": "Oui",
    "priceLevel": "Abordable",
    "logo": "https://ensit.ci/wp-content/uploads/2024/04/cropped-logo-ensitok.png",
    "longitude": "-4.0032",
    "latitude": "5.3398",
    "createdAt": "2025-10-15T12:17:20.998Z",
    "updatedAt": "2025-10-15T12:18:35.892Z",
    "filieres": [
      { "id": 10, "name": "Informatique", "schoolId": 4, "createdAt": "2025-10-15T12:17:20.998Z", "updatedAt": "2025-10-15T12:17:20.998Z" },
      { "id": 11, "name": "Télécommunications", "schoolId": 4, "createdAt": "2025-10-15T12:17:20.998Z", "updatedAt": "2025-10-15T12:17:20.998Z" },
      { "id": 12, "name": "Cybersecurity", "schoolId": 4, "createdAt": "2025-10-15T12:17:20.998Z", "updatedAt": "2025-10-15T12:17:20.998Z" }
    ],
    "reviews": []
  },
  
  {
    "id": 10,
    "name": "Université Nangui Abrogoua",
    "type": "Publique",
    "commune": "Abobo",
    "stateSupport": "Oui",
    "priceLevel": "Trop chère",
    "logo": "https://upload.wikimedia.org/wikipedia/fr/1/15/Logotype_Universit%C3%A9_Nangui_Abrogoua.png",
    "longitude": "-4.0205",
    "latitude": "5.4002",
    "createdAt": "2025-10-17T09:22:10.000Z",
    "updatedAt": "2025-10-17T09:22:10.000Z",
    "filieres": [
      { "id": 13, "name": "Biologie", "schoolId": 5, "createdAt": "2025-10-17T09:22:10.000Z", "updatedAt": "2025-10-17T09:22:10.000Z" },
      { "id": 14, "name": "Chimie", "schoolId": 5, "createdAt": "2025-10-17T09:22:10.000Z", "updatedAt": "2025-10-17T09:22:10.000Z" }
    ],
    "reviews": [
      {
        "id": 1,
        "userId": 6,
        "schoolId": 5,
        "comment": "Les professeurs sont passionnés et disponibles.",
        "createdAt": "2025-10-18T10:05:43.000Z",
        "updatedAt": "2025-10-18T10:05:43.000Z",
        "scores": [
          {
            "id": 1,
            "reviewId": 1,
            "criteriaId": 1,
            "value": "Très bien",
            "createdAt": "2025-10-18T10:05:43.000Z",
            "updatedAt": "2025-10-18T10:05:43.000Z",
            "criteria": { "id": 1, "label": "Cours théoriques", "icon": null, "createdAt": "2025-10-15T14:41:49.544Z", "updatedAt": "2025-10-15T14:41:49.544Z" }
          },
          {
            "id": 2,
            "reviewId": 1,
            "criteriaId": 3,
            "value": "Très bien",
            "createdAt": "2025-10-18T10:05:43.000Z",
            "updatedAt": "2025-10-18T10:05:43.000Z",
            "criteria": { "id": 3, "label": "Cadre étudiant", "icon": null, "createdAt": "2025-10-15T14:43:13.208Z", "updatedAt": "2025-10-15T14:43:13.208Z" }
          },
          {
            "id": 3,
            "reviewId": 1,
            "criteriaId": 3,
            "value": "Bien",
            "createdAt": "2025-10-16T14:32:09.203Z",
            "updatedAt": "2025-10-16T14:32:09.203Z",
            "criteria": { "id": 3, "label": "Cadre étudiant", "icon": null, "createdAt": "2025-10-15T14:43:13.208Z", "updatedAt": "2025-10-15T14:43:13.208Z" }
          },
          {
            "id": 4,
            "reviewId": 1,
            "criteriaId": 4,
            "value": "Moyen",
            "createdAt": "2025-10-16T14:32:09.203Z",
            "updatedAt": "2025-10-16T14:32:09.203Z",
            "criteria": { "id": 4, "label": "Frais Scolaire", "icon": null, "createdAt": "2025-10-15T14:43:35.951Z", "updatedAt": "2025-10-15T14:43:35.951Z" }
          }
        ]
      },
      {
        "id": 2,
        "userId": 4,
        "schoolId": 5,
        "comment": "Les cours théoriques sont excellents, mais les frais un peu élevés",
        "createdAt": "2025-10-16T14:32:09.203Z",
        "updatedAt": "2025-10-16T14:32:09.203Z",
        "scores": [
          {
            "id": 1,
            "reviewId": 2,
            "criteriaId": 1,
            "value": "Très bien",
            "createdAt": "2025-10-16T14:32:09.203Z",
            "updatedAt": "2025-10-16T14:32:09.203Z",
            "criteria": { "id": 1, "label": "Cours théoriques", "icon": null, "createdAt": "2025-10-15T14:41:49.544Z", "updatedAt": "2025-10-15T14:41:49.544Z" }
          },
          {
            "id": 2,
            "reviewId": 2,
            "criteriaId": 1,
            "value": "Bien",
            "createdAt": "2025-10-16T14:32:09.203Z",
            "updatedAt": "2025-10-16T14:32:09.203Z",
            "criteria": { "id": 2, "label": "Cours pratiques", "icon": null, "createdAt": "2025-10-15T14:42:58.237Z", "updatedAt": "2025-10-15T14:42:58.237Z" }
          },
          {
            "id": 3,
            "reviewId": 2,
            "criteriaId": 3,
            "value": "Bien",
            "createdAt": "2025-10-16T14:32:09.203Z",
            "updatedAt": "2025-10-16T14:32:09.203Z",
            "criteria": { "id": 3, "label": "Cadre étudiant", "icon": null, "createdAt": "2025-10-15T14:43:13.208Z", "updatedAt": "2025-10-15T14:43:13.208Z" }
          },
          {
            "id": 4,
            "reviewId": 2,
            "criteriaId": 4,
            "value": "Moyen",
            "createdAt": "2025-10-16T14:32:09.203Z",
            "updatedAt": "2025-10-16T14:32:09.203Z",
            "criteria": { "id": 4, "label": "Frais Scolaire", "icon": null, "createdAt": "2025-10-15T14:43:35.951Z", "updatedAt": "2025-10-15T14:43:35.951Z" }
          }
        ]
      }
    ]
  },
]

export default datas;