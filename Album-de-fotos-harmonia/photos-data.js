// Catálogo Oficial de Fotos - Casa Harmonia | Paralelo 17
// Total de fotos: 496
const PHOTOS_DATA = [
  {
    "id": 1,
    "number": "001",
    "filename": "001 – © Bruno Pinheiro – DJI_20250122182550_0758_D.jpg",
    "category": "drone",
    "categoryName": "Drone & Aéreas",
    "tags": [
      "drone",
      "aérea",
      "panorâmica",
      "destaque"
    ],
    "isDrone": true,
    "isHDR": false,
    "width": 3200,
    "height": 1800,
    "aspect": "16/9",
    "time": "2025:01:22 18:25:50"
  },
  {
    "id": 2,
    "number": "002",
    "filename": "002 – © Bruno Pinheiro – DJI_20250126090120_0005_D.jpg",
    "category": "drone",
    "categoryName": "Drone & Aéreas",
    "tags": [
      "drone",
      "aérea",
      "panorâmica",
      "destaque"
    ],
    "isDrone": true,
    "isHDR": false,
    "width": 3200,
    "height": 1800,
    "aspect": "16/9",
    "time": "2025:01:26 09:01:20"
  },
  {
    "id": 3,
    "number": "003",
    "filename": "003 – © Bruno Pinheiro – BPR_5902.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem",
      "destaque"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 15:58:40"
  },
  {
    "id": 4,
    "number": "004",
    "filename": "004 – © Bruno Pinheiro – BPR_5867.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala",
      "destaque"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 15:40:49"
  },
  {
    "id": 5,
    "number": "005",
    "filename": "005 – © Bruno Pinheiro – BPR_5873-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim",
      "destaque"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 15:47:33"
  },
  {
    "id": 6,
    "number": "006",
    "filename": "006 – © Bruno Pinheiro – BPR_5898-HDR.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge",
      "destaque"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 15:57:43"
  },
  {
    "id": 7,
    "number": "007",
    "filename": "007 – © Bruno Pinheiro – BPR_7016.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala",
      "destaque"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:25 15:15:25"
  },
  {
    "id": 8,
    "number": "008",
    "filename": "008 – © Bruno Pinheiro – BPR_5881-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim",
      "destaque"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 15:49:50"
  },
  {
    "id": 9,
    "number": "009",
    "filename": "009 – © Bruno Pinheiro – DJI_20250123055030_0792_D.jpg",
    "category": "drone",
    "categoryName": "Drone & Aéreas",
    "tags": [
      "drone",
      "aérea",
      "panorâmica",
      "destaque"
    ],
    "isDrone": true,
    "isHDR": false,
    "width": 3200,
    "height": 1800,
    "aspect": "16/9",
    "time": "2025:01:23 05:50:30"
  },
  {
    "id": 10,
    "number": "010",
    "filename": "010 – © Bruno Pinheiro – DJI_20250122154544_0731_D.jpg",
    "category": "drone",
    "categoryName": "Drone & Aéreas",
    "tags": [
      "drone",
      "aérea",
      "panorâmica",
      "destaque"
    ],
    "isDrone": true,
    "isHDR": false,
    "width": 3200,
    "height": 1800,
    "aspect": "16/9",
    "time": "2025:01:22 15:45:44"
  },
  {
    "id": 11,
    "number": "011",
    "filename": "011 – © Bruno Pinheiro – BPR_7139.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna",
      "destaque"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:25 15:46:51"
  },
  {
    "id": 12,
    "number": "012",
    "filename": "012 – © Bruno Pinheiro – DJI_20250125154311_0936_D.jpg",
    "category": "drone",
    "categoryName": "Drone & Aéreas",
    "tags": [
      "drone",
      "aérea",
      "panorâmica",
      "destaque"
    ],
    "isDrone": true,
    "isHDR": false,
    "width": 3200,
    "height": 1800,
    "aspect": "16/9",
    "time": "2025:01:25 15:43:11"
  },
  {
    "id": 13,
    "number": "013",
    "filename": "013 – © Bruno Pinheiro – BPR_5430-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim",
      "destaque"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:22 16:31:18"
  },
  {
    "id": 14,
    "number": "014",
    "filename": "014 – © Bruno Pinheiro – BPR_8228.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim",
      "destaque"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 08:42:44"
  },
  {
    "id": 15,
    "number": "015",
    "filename": "015 – © Bruno Pinheiro – BPR_6176.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim",
      "destaque"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 15:20:55"
  },
  {
    "id": 16,
    "number": "016",
    "filename": "016 – © Bruno Pinheiro – BPR_7423.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim",
      "destaque"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:25 16:53:51"
  },
  {
    "id": 17,
    "number": "017",
    "filename": "017 – © Bruno Pinheiro – BPR_5446.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim",
      "destaque"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:22 16:39:40"
  },
  {
    "id": 18,
    "number": "018",
    "filename": "018 – © Bruno Pinheiro – BPR_9323.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim",
      "destaque"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 17:31:28"
  },
  {
    "id": 19,
    "number": "019",
    "filename": "019 – © Bruno Pinheiro – BPR_5555-HDR.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem",
      "destaque"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:22 17:48:20"
  },
  {
    "id": 20,
    "number": "020",
    "filename": "020 – © Bruno Pinheiro – BPR_7335.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna",
      "destaque"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:25 16:39:17"
  },
  {
    "id": 21,
    "number": "021",
    "filename": "021 – © Bruno Pinheiro – BPR_5575.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim",
      "destaque"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:22 17:59:40"
  },
  {
    "id": 22,
    "number": "022",
    "filename": "022 – © Bruno Pinheiro – BPR_7268.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge",
      "destaque"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:25 16:24:27"
  },
  {
    "id": 23,
    "number": "023",
    "filename": "023 – © Bruno Pinheiro – BPR_8994.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna",
      "destaque"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 18:07:40"
  },
  {
    "id": 24,
    "number": "024",
    "filename": "024 – © Bruno Pinheiro – BPR_9004.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna",
      "destaque"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 18:09:09"
  },
  {
    "id": 25,
    "number": "025",
    "filename": "025 – © Bruno Pinheiro – BPR_5500.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna",
      "destaque"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 2134,
    "height": 3200,
    "aspect": "2/3",
    "time": "2025:01:22 17:29:59"
  },
  {
    "id": 26,
    "number": "026",
    "filename": "026 – © Bruno Pinheiro – BPR_5482-HDR.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge",
      "destaque"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:22 17:21:01"
  },
  {
    "id": 27,
    "number": "027",
    "filename": "027 – © Bruno Pinheiro – BPR_5503.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim",
      "destaque"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:22 17:31:12"
  },
  {
    "id": 28,
    "number": "028",
    "filename": "028 – © Bruno Pinheiro – BPR_9334.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge",
      "destaque"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 17:35:15"
  },
  {
    "id": 29,
    "number": "029",
    "filename": "029 – © Bruno Pinheiro – BPR_7232.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem",
      "destaque"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:25 16:19:37"
  },
  {
    "id": 30,
    "number": "030",
    "filename": "030 – © Bruno Pinheiro – BPR_6322.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna",
      "destaque"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 17:04:36"
  },
  {
    "id": 31,
    "number": "031",
    "filename": "031 – © Bruno Pinheiro – BPR_9328.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 17:34:11"
  },
  {
    "id": 32,
    "number": "032",
    "filename": "032 – © Bruno Pinheiro – BPR_9397.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 17:53:16"
  },
  {
    "id": 33,
    "number": "033",
    "filename": "033 – © Bruno Pinheiro – BPR_5495-HDR.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:22 17:28:30"
  },
  {
    "id": 34,
    "number": "034",
    "filename": "034 – © Bruno Pinheiro – BPR_9363.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 17:45:42"
  },
  {
    "id": 35,
    "number": "035",
    "filename": "035 – © Bruno Pinheiro – BPR_9353.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 17:43:48"
  },
  {
    "id": 36,
    "number": "036",
    "filename": "036 – © Bruno Pinheiro – BPR_5519.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:22 17:36:40"
  },
  {
    "id": 37,
    "number": "037",
    "filename": "037 – © Bruno Pinheiro – BPR_9322.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 17:30:18"
  },
  {
    "id": 38,
    "number": "038",
    "filename": "038 – © Bruno Pinheiro – BPR_9007.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 18:09:42"
  },
  {
    "id": 39,
    "number": "039",
    "filename": "039 – © Bruno Pinheiro – BPR_5570-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:22 17:57:47"
  },
  {
    "id": 40,
    "number": "040",
    "filename": "040 – © Bruno Pinheiro – BPR_9402.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 17:55:36"
  },
  {
    "id": 41,
    "number": "041",
    "filename": "041 – © Bruno Pinheiro – BPR_5589-HDR.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:22 18:04:29"
  },
  {
    "id": 42,
    "number": "042",
    "filename": "042 – © Bruno Pinheiro – BPR_5601.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:22 18:06:42"
  },
  {
    "id": 43,
    "number": "043",
    "filename": "043 – © Bruno Pinheiro – BPR_9340.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 17:39:37"
  },
  {
    "id": 44,
    "number": "044",
    "filename": "044 – © Bruno Pinheiro – BPR_9345.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 17:41:31"
  },
  {
    "id": 45,
    "number": "045",
    "filename": "045 – © Bruno Pinheiro – BPR_9344.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 17:41:05"
  },
  {
    "id": 46,
    "number": "046",
    "filename": "046 – © Bruno Pinheiro – BPR_9405.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 17:56:47"
  },
  {
    "id": 47,
    "number": "047",
    "filename": "047 – © Bruno Pinheiro – BPR_5567-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:22 17:53:49"
  },
  {
    "id": 48,
    "number": "048",
    "filename": "048 – © Bruno Pinheiro – BPR_9319.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 17:29:25"
  },
  {
    "id": 49,
    "number": "049",
    "filename": "049 – © Bruno Pinheiro – BPR_5541-HDR.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:22 17:44:50"
  },
  {
    "id": 50,
    "number": "050",
    "filename": "050 – © Bruno Pinheiro – BPR_9366.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 17:46:39"
  },
  {
    "id": 51,
    "number": "051",
    "filename": "051 – © Bruno Pinheiro – BPR_5546-HDR.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:22 17:45:52"
  },
  {
    "id": 52,
    "number": "052",
    "filename": "052 – © Bruno Pinheiro – BPR_9367.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 2134,
    "height": 3200,
    "aspect": "2/3",
    "time": "2025:01:28 17:46:52"
  },
  {
    "id": 53,
    "number": "053",
    "filename": "053 – © Bruno Pinheiro – BPR_9324.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 17:32:30"
  },
  {
    "id": 54,
    "number": "054",
    "filename": "054 – © Bruno Pinheiro – DJI_20250125174440_0959_D.jpg",
    "category": "drone",
    "categoryName": "Drone & Aéreas",
    "tags": [
      "drone",
      "aérea",
      "panorâmica",
      "destaque"
    ],
    "isDrone": true,
    "isHDR": false,
    "width": 3200,
    "height": 1800,
    "aspect": "16/9",
    "time": "2025:01:25 17:44:40"
  },
  {
    "id": 55,
    "number": "055",
    "filename": "055 – © Bruno Pinheiro – BPR_8869.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 17:44:12"
  },
  {
    "id": 56,
    "number": "056",
    "filename": "056 – © Bruno Pinheiro – DJI_20250125174353_0956_D.jpg",
    "category": "drone",
    "categoryName": "Drone & Aéreas",
    "tags": [
      "drone",
      "aérea",
      "panorâmica",
      "destaque"
    ],
    "isDrone": true,
    "isHDR": false,
    "width": 3200,
    "height": 1800,
    "aspect": "16/9",
    "time": "2025:01:25 17:43:53"
  },
  {
    "id": 57,
    "number": "057",
    "filename": "057 – © Bruno Pinheiro – BPR_7291.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:25 16:31:40"
  },
  {
    "id": 58,
    "number": "058",
    "filename": "058 – © Bruno Pinheiro – BPR_7371.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:25 16:45:16"
  },
  {
    "id": 59,
    "number": "059",
    "filename": "059 – © Bruno Pinheiro – BPR_7304.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:25 16:33:42"
  },
  {
    "id": 60,
    "number": "060",
    "filename": "060 – © Bruno Pinheiro – BPR_6294-HDR.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 16:39:32"
  },
  {
    "id": 61,
    "number": "061",
    "filename": "061 – © Bruno Pinheiro – BPR_7385.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:25 16:49:41"
  },
  {
    "id": 62,
    "number": "062",
    "filename": "062 – © Bruno Pinheiro – BPR_5458-HDR.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:22 17:01:57"
  },
  {
    "id": 63,
    "number": "063",
    "filename": "063 – © Bruno Pinheiro – BPR_5471-HDR.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:22 17:12:40"
  },
  {
    "id": 64,
    "number": "064",
    "filename": "064 – © Bruno Pinheiro – BPR_9375.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 17:49:01"
  },
  {
    "id": 65,
    "number": "065",
    "filename": "065 – © Bruno Pinheiro – BPR_5464-HDR.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:22 17:05:15"
  },
  {
    "id": 66,
    "number": "066",
    "filename": "066 – © Bruno Pinheiro – BPR_9393.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 17:52:38"
  },
  {
    "id": 67,
    "number": "067",
    "filename": "067 – © Bruno Pinheiro – BPR_5468-HDR.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:22 17:10:56"
  },
  {
    "id": 68,
    "number": "068",
    "filename": "068 – © Bruno Pinheiro – BPR_9379.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 17:49:55"
  },
  {
    "id": 69,
    "number": "069",
    "filename": "069 – © Bruno Pinheiro – BPR_9391.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 17:51:32"
  },
  {
    "id": 70,
    "number": "070",
    "filename": "070 – © Bruno Pinheiro – BPR_5476-HDR.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:22 17:13:58"
  },
  {
    "id": 71,
    "number": "071",
    "filename": "071 – © Bruno Pinheiro – BPR_7576.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:25 17:50:10"
  },
  {
    "id": 72,
    "number": "072",
    "filename": "072 – © Bruno Pinheiro – BPR_7000.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:25 15:12:23"
  },
  {
    "id": 73,
    "number": "073",
    "filename": "073 – © Bruno Pinheiro – BPR_5915.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 16:01:52"
  },
  {
    "id": 74,
    "number": "074",
    "filename": "074 – © Bruno Pinheiro – BPR_5907.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 16:01:07"
  },
  {
    "id": 75,
    "number": "075",
    "filename": "075 – © Bruno Pinheiro – BPR_5849.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 11:32:39"
  },
  {
    "id": 76,
    "number": "076",
    "filename": "076 – © Bruno Pinheiro – BPR_6133-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 15:08:41"
  },
  {
    "id": 77,
    "number": "077",
    "filename": "077 – © Bruno Pinheiro – BPR_6142.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 15:09:27"
  },
  {
    "id": 78,
    "number": "078",
    "filename": "078 – © Bruno Pinheiro – BPR_6144.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 15:11:34"
  },
  {
    "id": 79,
    "number": "079",
    "filename": "079 – © Bruno Pinheiro – BPR_6149-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 15:13:39"
  },
  {
    "id": 80,
    "number": "080",
    "filename": "080 – © Bruno Pinheiro – BPR_6156.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 15:15:04"
  },
  {
    "id": 81,
    "number": "081",
    "filename": "081 – © Bruno Pinheiro – BPR_6167.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 15:18:03"
  },
  {
    "id": 82,
    "number": "082",
    "filename": "082 – © Bruno Pinheiro – DJI_20250122154145_0727_D.jpg",
    "category": "drone",
    "categoryName": "Drone & Aéreas",
    "tags": [
      "drone",
      "aérea",
      "panorâmica",
      "destaque"
    ],
    "isDrone": true,
    "isHDR": false,
    "width": 3200,
    "height": 1800,
    "aspect": "16/9",
    "time": "2025:01:22 15:41:45"
  },
  {
    "id": 83,
    "number": "083",
    "filename": "083 – © Bruno Pinheiro – BPR_5903-HDR.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 16:00:32"
  },
  {
    "id": 84,
    "number": "084",
    "filename": "084 – © Bruno Pinheiro – DJI_20250126173014_0027_D.jpg",
    "category": "drone",
    "categoryName": "Drone & Aéreas",
    "tags": [
      "drone",
      "aérea",
      "panorâmica",
      "destaque"
    ],
    "isDrone": true,
    "isHDR": false,
    "width": 3200,
    "height": 1800,
    "aspect": "16/9",
    "time": "2025:01:26 17:30:14"
  },
  {
    "id": 85,
    "number": "085",
    "filename": "085 – © Bruno Pinheiro – BPR_8891.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 17:47:57"
  },
  {
    "id": 86,
    "number": "086",
    "filename": "086 – © Bruno Pinheiro – DJI_20250123164806_0821_D.jpg",
    "category": "drone",
    "categoryName": "Drone & Aéreas",
    "tags": [
      "drone",
      "aérea",
      "panorâmica",
      "destaque"
    ],
    "isDrone": true,
    "isHDR": false,
    "width": 3200,
    "height": 1800,
    "aspect": "16/9",
    "time": "2025:01:23 16:48:06"
  },
  {
    "id": 87,
    "number": "087",
    "filename": "087 – © Bruno Pinheiro – BPR_5940.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 16:14:56"
  },
  {
    "id": 88,
    "number": "088",
    "filename": "088 – © Bruno Pinheiro – BPR_6211-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 15:56:21"
  },
  {
    "id": 89,
    "number": "089",
    "filename": "089 – © Bruno Pinheiro – BPR_6312.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 16:57:45"
  },
  {
    "id": 90,
    "number": "090",
    "filename": "090 – © Bruno Pinheiro – BPR_6233.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 16:12:08"
  },
  {
    "id": 91,
    "number": "091",
    "filename": "091 – © Bruno Pinheiro – BPR_6218-HDR.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 16:04:15"
  },
  {
    "id": 92,
    "number": "092",
    "filename": "092 – © Bruno Pinheiro – BPR_6228.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 16:10:56"
  },
  {
    "id": 93,
    "number": "093",
    "filename": "093 – © Bruno Pinheiro – BPR_8338.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 10:57:22"
  },
  {
    "id": 94,
    "number": "094",
    "filename": "094 – © Bruno Pinheiro – BPR_6324.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 17:05:00"
  },
  {
    "id": 95,
    "number": "095",
    "filename": "095 – © Bruno Pinheiro – BPR_6223-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 16:08:10"
  },
  {
    "id": 96,
    "number": "096",
    "filename": "096 – © Bruno Pinheiro – BPR_6210.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 15:53:17"
  },
  {
    "id": 97,
    "number": "097",
    "filename": "097 – © Bruno Pinheiro – BPR_6215-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 15:57:59"
  },
  {
    "id": 98,
    "number": "098",
    "filename": "098 – © Bruno Pinheiro – BPR_6243.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 16:16:20"
  },
  {
    "id": 99,
    "number": "099",
    "filename": "099 – © Bruno Pinheiro – BPR_6246.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 16:17:46"
  },
  {
    "id": 100,
    "number": "100",
    "filename": "100 – © Bruno Pinheiro – BPR_6226.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 16:10:20"
  },
  {
    "id": 101,
    "number": "101",
    "filename": "101 – © Bruno Pinheiro – BPR_6244.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 16:16:48"
  },
  {
    "id": 102,
    "number": "102",
    "filename": "102 – © Bruno Pinheiro – BPR_8328.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 10:49:59"
  },
  {
    "id": 103,
    "number": "103",
    "filename": "103 – © Bruno Pinheiro – BPR_8335.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 10:51:31"
  },
  {
    "id": 104,
    "number": "104",
    "filename": "104 – © Bruno Pinheiro – DJI_20250124165714_0886_D.jpg",
    "category": "drone",
    "categoryName": "Drone & Aéreas",
    "tags": [
      "drone",
      "aérea",
      "panorâmica",
      "destaque"
    ],
    "isDrone": true,
    "isHDR": false,
    "width": 3200,
    "height": 1800,
    "aspect": "16/9",
    "time": "2025:01:24 16:57:14"
  },
  {
    "id": 105,
    "number": "105",
    "filename": "105 – © Bruno Pinheiro – BPR_6260-HDR.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 16:27:25"
  },
  {
    "id": 106,
    "number": "106",
    "filename": "106 – © Bruno Pinheiro – BPR_6257-HDR.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 16:24:54"
  },
  {
    "id": 107,
    "number": "107",
    "filename": "107 – © Bruno Pinheiro – BPR_6289.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 16:35:38"
  },
  {
    "id": 108,
    "number": "108",
    "filename": "108 – © Bruno Pinheiro – BPR_6323.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 2134,
    "height": 3200,
    "aspect": "2/3",
    "time": "2025:01:24 17:04:48"
  },
  {
    "id": 109,
    "number": "109",
    "filename": "109 – © Bruno Pinheiro – BPR_6290-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 16:38:02"
  },
  {
    "id": 110,
    "number": "110",
    "filename": "110 – © Bruno Pinheiro – BPR_6282.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 16:32:39"
  },
  {
    "id": 111,
    "number": "111",
    "filename": "111 – © Bruno Pinheiro – BPR_6287.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 16:34:54"
  },
  {
    "id": 112,
    "number": "112",
    "filename": "112 – © Bruno Pinheiro – BPR_6307.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 16:55:22"
  },
  {
    "id": 113,
    "number": "113",
    "filename": "113 – © Bruno Pinheiro – BPR_6306.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 16:55:06"
  },
  {
    "id": 114,
    "number": "114",
    "filename": "114 – © Bruno Pinheiro – BPR_6304.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 16:54:40"
  },
  {
    "id": 115,
    "number": "115",
    "filename": "115 – © Bruno Pinheiro – BPR_6277-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 16:31:35"
  },
  {
    "id": 116,
    "number": "116",
    "filename": "116 – © Bruno Pinheiro – BPR_8291.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 10:36:31"
  },
  {
    "id": 117,
    "number": "117",
    "filename": "117 – © Bruno Pinheiro – BPR_8303.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 10:39:39"
  },
  {
    "id": 118,
    "number": "118",
    "filename": "118 – © Bruno Pinheiro – BPR_8313.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 10:46:22"
  },
  {
    "id": 119,
    "number": "119",
    "filename": "119 – © Bruno Pinheiro – BPR_8319.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 10:47:35"
  },
  {
    "id": 120,
    "number": "120",
    "filename": "120 – © Bruno Pinheiro – BPR_8316.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 2134,
    "height": 3200,
    "aspect": "2/3",
    "time": "2025:01:26 10:46:59"
  },
  {
    "id": 121,
    "number": "121",
    "filename": "121 – © Bruno Pinheiro – BPR_8288.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 10:35:09"
  },
  {
    "id": 122,
    "number": "122",
    "filename": "122 – © Bruno Pinheiro – BPR_8295.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 10:37:53"
  },
  {
    "id": 123,
    "number": "123",
    "filename": "123 – © Bruno Pinheiro – BPR_8299.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 10:38:54"
  },
  {
    "id": 124,
    "number": "124",
    "filename": "124 – © Bruno Pinheiro – BPR_8308.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 10:44:40"
  },
  {
    "id": 125,
    "number": "125",
    "filename": "125 – © Bruno Pinheiro – BPR_8324.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 10:48:58"
  },
  {
    "id": 126,
    "number": "126",
    "filename": "126 – © Bruno Pinheiro – BPR_6326.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 17:05:48"
  },
  {
    "id": 127,
    "number": "127",
    "filename": "127 – © Bruno Pinheiro – BPR_7469.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:25 17:09:56"
  },
  {
    "id": 128,
    "number": "128",
    "filename": "128 – © Bruno Pinheiro – BPR_7453.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:25 17:09:05"
  },
  {
    "id": 129,
    "number": "129",
    "filename": "129 – © Bruno Pinheiro – BPR_5941-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 16:18:16"
  },
  {
    "id": 130,
    "number": "130",
    "filename": "130 – © Bruno Pinheiro – BPR_5945-HDR.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 16:20:36"
  },
  {
    "id": 131,
    "number": "131",
    "filename": "131 – © Bruno Pinheiro – BPR_8761.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 2134,
    "height": 3200,
    "aspect": "2/3",
    "time": "2025:01:26 16:58:02"
  },
  {
    "id": 132,
    "number": "132",
    "filename": "132 – © Bruno Pinheiro – BPR_5454.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:22 16:41:54"
  },
  {
    "id": 133,
    "number": "133",
    "filename": "133 – © Bruno Pinheiro – BPR_5847.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 10:05:11"
  },
  {
    "id": 134,
    "number": "134",
    "filename": "134 – © Bruno Pinheiro – BPR_6041-HDR.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 17:25:18"
  },
  {
    "id": 135,
    "number": "135",
    "filename": "135 – © Bruno Pinheiro – BPR_6045-HDR.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 17:26:42"
  },
  {
    "id": 136,
    "number": "136",
    "filename": "136 – © Bruno Pinheiro – BPR_6102.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 2134,
    "height": 3200,
    "aspect": "2/3",
    "time": "2025:01:23 18:00:10"
  },
  {
    "id": 137,
    "number": "137",
    "filename": "137 – © Bruno Pinheiro – BPR_5578.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:22 18:00:27"
  },
  {
    "id": 138,
    "number": "138",
    "filename": "138 – © Bruno Pinheiro – DJI_20250123055430_0802_D.jpg",
    "category": "drone",
    "categoryName": "Drone & Aéreas",
    "tags": [
      "drone",
      "aérea",
      "panorâmica",
      "destaque"
    ],
    "isDrone": true,
    "isHDR": false,
    "width": 3200,
    "height": 1800,
    "aspect": "16/9",
    "time": "2025:01:23 05:54:30"
  },
  {
    "id": 139,
    "number": "139",
    "filename": "139 – © Bruno Pinheiro – BPR_5437.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:22 16:35:31"
  },
  {
    "id": 140,
    "number": "140",
    "filename": "140 – © Bruno Pinheiro – BPR_5928-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 16:10:55"
  },
  {
    "id": 141,
    "number": "141",
    "filename": "141 – © Bruno Pinheiro – BPR_8524.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 15:39:23"
  },
  {
    "id": 142,
    "number": "142",
    "filename": "142 – © Bruno Pinheiro – BPR_5890.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 15:53:48"
  },
  {
    "id": 143,
    "number": "143",
    "filename": "143 – © Bruno Pinheiro – BPR_8532.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 15:41:48"
  },
  {
    "id": 144,
    "number": "144",
    "filename": "144 – © Bruno Pinheiro – BPR_8485-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 15:27:06"
  },
  {
    "id": 145,
    "number": "145",
    "filename": "145 – © Bruno Pinheiro – BPR_8517.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 15:37:53"
  },
  {
    "id": 146,
    "number": "146",
    "filename": "146 – © Bruno Pinheiro – BPR_8527.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 15:40:25"
  },
  {
    "id": 147,
    "number": "147",
    "filename": "147 – © Bruno Pinheiro – BPR_8530.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 15:40:58"
  },
  {
    "id": 148,
    "number": "148",
    "filename": "148 – © Bruno Pinheiro – BPR_8467-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 15:17:57"
  },
  {
    "id": 149,
    "number": "149",
    "filename": "149 – © Bruno Pinheiro – DJI_20250123164638_0818_D.jpg",
    "category": "drone",
    "categoryName": "Drone & Aéreas",
    "tags": [
      "drone",
      "aérea",
      "panorâmica",
      "destaque"
    ],
    "isDrone": true,
    "isHDR": false,
    "width": 3200,
    "height": 1800,
    "aspect": "16/9",
    "time": "2025:01:23 16:46:38"
  },
  {
    "id": 150,
    "number": "150",
    "filename": "150 – © Bruno Pinheiro – BPR_5982.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 16:56:58"
  },
  {
    "id": 151,
    "number": "151",
    "filename": "151 – © Bruno Pinheiro – BPR_7201.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:25 15:56:01"
  },
  {
    "id": 152,
    "number": "152",
    "filename": "152 – © Bruno Pinheiro – BPR_5979.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 16:55:06"
  },
  {
    "id": 153,
    "number": "153",
    "filename": "153 – © Bruno Pinheiro – BPR_7188.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:25 15:54:59"
  },
  {
    "id": 154,
    "number": "154",
    "filename": "154 – © Bruno Pinheiro – BPR_6037.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 17:18:21"
  },
  {
    "id": 155,
    "number": "155",
    "filename": "155 – © Bruno Pinheiro – BPR_6033.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 17:16:06"
  },
  {
    "id": 156,
    "number": "156",
    "filename": "156 – © Bruno Pinheiro – BPR_6050.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 17:27:40"
  },
  {
    "id": 157,
    "number": "157",
    "filename": "157 – © Bruno Pinheiro – BPR_6017-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 17:13:43"
  },
  {
    "id": 158,
    "number": "158",
    "filename": "158 – © Bruno Pinheiro – DJI_20250124165405_0877_D.jpg",
    "category": "drone",
    "categoryName": "Drone & Aéreas",
    "tags": [
      "drone",
      "aérea",
      "panorâmica",
      "destaque"
    ],
    "isDrone": true,
    "isHDR": false,
    "width": 3200,
    "height": 1800,
    "aspect": "16/9",
    "time": "2025:01:24 16:54:05"
  },
  {
    "id": 159,
    "number": "159",
    "filename": "159 – © Bruno Pinheiro – BPR_5987.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 16:58:23"
  },
  {
    "id": 160,
    "number": "160",
    "filename": "160 – © Bruno Pinheiro – BPR_5989.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 16:58:51"
  },
  {
    "id": 161,
    "number": "161",
    "filename": "161 – © Bruno Pinheiro – BPR_5995.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 17:01:25"
  },
  {
    "id": 162,
    "number": "162",
    "filename": "162 – © Bruno Pinheiro – BPR_5997.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 17:01:50"
  },
  {
    "id": 163,
    "number": "163",
    "filename": "163 – © Bruno Pinheiro – BPR_5992.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 16:59:29"
  },
  {
    "id": 164,
    "number": "164",
    "filename": "164 – © Bruno Pinheiro – BPR_7205.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:25 15:57:21"
  },
  {
    "id": 165,
    "number": "165",
    "filename": "165 – © Bruno Pinheiro – BPR_5998-HDR.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 17:03:34"
  },
  {
    "id": 166,
    "number": "166",
    "filename": "166 – © Bruno Pinheiro – BPR_8416-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 14:29:32"
  },
  {
    "id": 167,
    "number": "167",
    "filename": "167 – © Bruno Pinheiro – BPR_8425-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 14:35:30"
  },
  {
    "id": 168,
    "number": "168",
    "filename": "168 – © Bruno Pinheiro – BPR_9061-HDR.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 18:30:02"
  },
  {
    "id": 169,
    "number": "169",
    "filename": "169 – © Bruno Pinheiro – BPR_8448-HDR.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 14:42:32"
  },
  {
    "id": 170,
    "number": "170",
    "filename": "170 – © Bruno Pinheiro – BPR_8447.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 14:40:13"
  },
  {
    "id": 171,
    "number": "171",
    "filename": "171 – © Bruno Pinheiro – BPR_8439-HDR.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 14:38:59"
  },
  {
    "id": 172,
    "number": "172",
    "filename": "172 – © Bruno Pinheiro – BPR_8457-HDR.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 14:47:06"
  },
  {
    "id": 173,
    "number": "173",
    "filename": "173 – © Bruno Pinheiro – BPR_9058-HDR.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 18:28:46"
  },
  {
    "id": 174,
    "number": "174",
    "filename": "174 – © Bruno Pinheiro – BPR_6177-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 15:24:34"
  },
  {
    "id": 175,
    "number": "175",
    "filename": "175 – © Bruno Pinheiro – BPR_6169-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 15:19:54"
  },
  {
    "id": 176,
    "number": "176",
    "filename": "176 – © Bruno Pinheiro – BPR_6161-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 15:17:26"
  },
  {
    "id": 177,
    "number": "177",
    "filename": "177 – © Bruno Pinheiro – BPR_6190.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 15:31:39"
  },
  {
    "id": 178,
    "number": "178",
    "filename": "178 – © Bruno Pinheiro – BPR_6201.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 15:35:26"
  },
  {
    "id": 179,
    "number": "179",
    "filename": "179 – © Bruno Pinheiro – BPR_6198.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 15:34:55"
  },
  {
    "id": 180,
    "number": "180",
    "filename": "180 – © Bruno Pinheiro – BPR_6159.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 15:15:28"
  },
  {
    "id": 181,
    "number": "181",
    "filename": "181 – © Bruno Pinheiro – BPR_6192-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 15:34:04"
  },
  {
    "id": 182,
    "number": "182",
    "filename": "182 – © Bruno Pinheiro – BPR_6011-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 17:10:18"
  },
  {
    "id": 183,
    "number": "183",
    "filename": "183 – © Bruno Pinheiro – BPR_9138.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 15:51:01"
  },
  {
    "id": 184,
    "number": "184",
    "filename": "184 – © Bruno Pinheiro – BPR_9140.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 15:51:49"
  },
  {
    "id": 185,
    "number": "185",
    "filename": "185 – © Bruno Pinheiro – BPR_9144.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 15:52:40"
  },
  {
    "id": 186,
    "number": "186",
    "filename": "186 – © Bruno Pinheiro – BPR_8256-HDR.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 09:52:49"
  },
  {
    "id": 187,
    "number": "187",
    "filename": "187 – © Bruno Pinheiro – BPR_8241-HDR.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 09:46:06"
  },
  {
    "id": 188,
    "number": "188",
    "filename": "188 – © Bruno Pinheiro – BPR_8264.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 09:55:25"
  },
  {
    "id": 189,
    "number": "189",
    "filename": "189 – © Bruno Pinheiro – BPR_8265.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 09:56:03"
  },
  {
    "id": 190,
    "number": "190",
    "filename": "190 – © Bruno Pinheiro – BPR_8268.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 09:56:30"
  },
  {
    "id": 191,
    "number": "191",
    "filename": "191 – © Bruno Pinheiro – BPR_8275.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 09:58:54"
  },
  {
    "id": 192,
    "number": "192",
    "filename": "192 – © Bruno Pinheiro – BPR_8276.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 09:59:40"
  },
  {
    "id": 193,
    "number": "193",
    "filename": "193 – © Bruno Pinheiro – BPR_8282.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 10:01:06"
  },
  {
    "id": 194,
    "number": "194",
    "filename": "194 – © Bruno Pinheiro – BPR_8281.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 10:00:30"
  },
  {
    "id": 195,
    "number": "195",
    "filename": "195 – © Bruno Pinheiro – BPR_8247.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 09:46:56"
  },
  {
    "id": 196,
    "number": "196",
    "filename": "196 – © Bruno Pinheiro – BPR_8237-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 09:45:21"
  },
  {
    "id": 197,
    "number": "197",
    "filename": "197 – © Bruno Pinheiro – BPR_6007-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 17:09:09"
  },
  {
    "id": 198,
    "number": "198",
    "filename": "198 – © Bruno Pinheiro – BPR_6004-HDR.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 17:06:38"
  },
  {
    "id": 199,
    "number": "199",
    "filename": "199 – © Bruno Pinheiro – BPR_5981.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 16:56:20"
  },
  {
    "id": 200,
    "number": "200",
    "filename": "200 – © Bruno Pinheiro – BPR_5724-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 08:47:15"
  },
  {
    "id": 201,
    "number": "201",
    "filename": "201 – © Bruno Pinheiro – BPR_5834-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 09:24:12"
  },
  {
    "id": 202,
    "number": "202",
    "filename": "202 – © Bruno Pinheiro – BPR_5698.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 08:28:12"
  },
  {
    "id": 203,
    "number": "203",
    "filename": "203 – © Bruno Pinheiro – BPR_5819.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 2134,
    "height": 3200,
    "aspect": "2/3",
    "time": "2025:01:23 09:11:54"
  },
  {
    "id": 204,
    "number": "204",
    "filename": "204 – © Bruno Pinheiro – BPR_5709-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 08:38:02"
  },
  {
    "id": 205,
    "number": "205",
    "filename": "205 – © Bruno Pinheiro – BPR_5713-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 08:42:13"
  },
  {
    "id": 206,
    "number": "206",
    "filename": "206 – © Bruno Pinheiro – BPR_5818.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 09:11:37"
  },
  {
    "id": 207,
    "number": "207",
    "filename": "207 – © Bruno Pinheiro – BPR_5799.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 2134,
    "height": 3200,
    "aspect": "2/3",
    "time": "2025:01:23 09:05:56"
  },
  {
    "id": 208,
    "number": "208",
    "filename": "208 – © Bruno Pinheiro – BPR_5813.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 09:10:07"
  },
  {
    "id": 209,
    "number": "209",
    "filename": "209 – © Bruno Pinheiro – BPR_5814.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 09:10:25"
  },
  {
    "id": 210,
    "number": "210",
    "filename": "210 – © Bruno Pinheiro – BPR_5680.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 08:15:37"
  },
  {
    "id": 211,
    "number": "211",
    "filename": "211 – © Bruno Pinheiro – BPR_5669.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 08:11:37"
  },
  {
    "id": 212,
    "number": "212",
    "filename": "212 – © Bruno Pinheiro – BPR_5693.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 08:22:38"
  },
  {
    "id": 213,
    "number": "213",
    "filename": "213 – © Bruno Pinheiro – BPR_5675.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 2134,
    "height": 3200,
    "aspect": "2/3",
    "time": "2025:01:23 08:13:03"
  },
  {
    "id": 214,
    "number": "214",
    "filename": "214 – © Bruno Pinheiro – BPR_5688.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 08:20:35"
  },
  {
    "id": 215,
    "number": "215",
    "filename": "215 – © Bruno Pinheiro – BPR_5789.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 09:02:56"
  },
  {
    "id": 216,
    "number": "216",
    "filename": "216 – © Bruno Pinheiro – BPR_5791.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 09:03:29"
  },
  {
    "id": 217,
    "number": "217",
    "filename": "217 – © Bruno Pinheiro – BPR_5797.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 2134,
    "height": 3200,
    "aspect": "2/3",
    "time": "2025:01:23 09:04:34"
  },
  {
    "id": 218,
    "number": "218",
    "filename": "218 – © Bruno Pinheiro – BPR_5779.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 08:59:54"
  },
  {
    "id": 219,
    "number": "219",
    "filename": "219 – © Bruno Pinheiro – BPR_5735.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 08:50:11"
  },
  {
    "id": 220,
    "number": "220",
    "filename": "220 – © Bruno Pinheiro – BPR_5750.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 08:53:34"
  },
  {
    "id": 221,
    "number": "221",
    "filename": "221 – © Bruno Pinheiro – BPR_5763.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 08:56:11"
  },
  {
    "id": 222,
    "number": "222",
    "filename": "222 – © Bruno Pinheiro – BPR_5766.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 2134,
    "height": 3200,
    "aspect": "2/3",
    "time": "2025:01:23 08:56:46"
  },
  {
    "id": 223,
    "number": "223",
    "filename": "223 – © Bruno Pinheiro – BPR_5761.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 2134,
    "height": 3200,
    "aspect": "2/3",
    "time": "2025:01:23 08:55:30"
  },
  {
    "id": 224,
    "number": "224",
    "filename": "224 – © Bruno Pinheiro – BPR_5788.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 09:02:19"
  },
  {
    "id": 225,
    "number": "225",
    "filename": "225 – © Bruno Pinheiro – BPR_5767.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 08:57:15"
  },
  {
    "id": 226,
    "number": "226",
    "filename": "226 – © Bruno Pinheiro – BPR_5770.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 08:57:50"
  },
  {
    "id": 227,
    "number": "227",
    "filename": "227 – © Bruno Pinheiro – BPR_5815.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 09:10:55"
  },
  {
    "id": 228,
    "number": "228",
    "filename": "228 – © Bruno Pinheiro – BPR_5830-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 09:21:26"
  },
  {
    "id": 229,
    "number": "229",
    "filename": "229 – © Bruno Pinheiro – BPR_8225.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 08:42:20"
  },
  {
    "id": 230,
    "number": "230",
    "filename": "230 – © Bruno Pinheiro – BPR_7056.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:25 15:22:33"
  },
  {
    "id": 231,
    "number": "231",
    "filename": "231 – © Bruno Pinheiro – BPR_8038.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 07:17:17"
  },
  {
    "id": 232,
    "number": "232",
    "filename": "232 – © Bruno Pinheiro – BPR_8130.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 07:47:37"
  },
  {
    "id": 233,
    "number": "233",
    "filename": "233 – © Bruno Pinheiro – BPR_8138.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 07:50:17"
  },
  {
    "id": 234,
    "number": "234",
    "filename": "234 – © Bruno Pinheiro – BPR_8132.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 07:48:12"
  },
  {
    "id": 235,
    "number": "235",
    "filename": "235 – © Bruno Pinheiro – BPR_8111.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 07:41:42"
  },
  {
    "id": 236,
    "number": "236",
    "filename": "236 – © Bruno Pinheiro – BPR_8117.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 07:43:01"
  },
  {
    "id": 237,
    "number": "237",
    "filename": "237 – © Bruno Pinheiro – BPR_8136.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "cama",
      "decor"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 07:49:05"
  },
  {
    "id": 238,
    "number": "238",
    "filename": "238 – © Bruno Pinheiro – BPR_8092.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 07:31:06"
  },
  {
    "id": 239,
    "number": "239",
    "filename": "239 – © Bruno Pinheiro – BPR_8142.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 07:52:39"
  },
  {
    "id": 240,
    "number": "240",
    "filename": "240 – © Bruno Pinheiro – BPR_8114.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 07:42:32"
  },
  {
    "id": 241,
    "number": "241",
    "filename": "241 – © Bruno Pinheiro – BPR_8113.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 07:42:02"
  },
  {
    "id": 242,
    "number": "242",
    "filename": "242 – © Bruno Pinheiro – BPR_8042.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 07:17:59"
  },
  {
    "id": 243,
    "number": "243",
    "filename": "243 – © Bruno Pinheiro – BPR_8135.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 07:48:54"
  },
  {
    "id": 244,
    "number": "244",
    "filename": "244 – © Bruno Pinheiro – BPR_8163.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 08:03:05"
  },
  {
    "id": 245,
    "number": "245",
    "filename": "245 – © Bruno Pinheiro – BPR_8101.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 07:40:14"
  },
  {
    "id": 246,
    "number": "246",
    "filename": "246 – © Bruno Pinheiro – BPR_8049.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 07:19:33"
  },
  {
    "id": 247,
    "number": "247",
    "filename": "247 – © Bruno Pinheiro – BPR_8094.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 07:32:00"
  },
  {
    "id": 248,
    "number": "248",
    "filename": "248 – © Bruno Pinheiro – BPR_8067.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 07:25:51"
  },
  {
    "id": 249,
    "number": "249",
    "filename": "249 – © Bruno Pinheiro – BPR_8072.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 07:26:55"
  },
  {
    "id": 250,
    "number": "250",
    "filename": "250 – © Bruno Pinheiro – BPR_8076.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 07:27:42"
  },
  {
    "id": 251,
    "number": "251",
    "filename": "251 – © Bruno Pinheiro – BPR_8090.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 07:30:51"
  },
  {
    "id": 252,
    "number": "252",
    "filename": "252 – © Bruno Pinheiro – BPR_8078.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 07:28:08"
  },
  {
    "id": 253,
    "number": "253",
    "filename": "253 – © Bruno Pinheiro – BPR_8084.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 07:29:36"
  },
  {
    "id": 254,
    "number": "254",
    "filename": "254 – © Bruno Pinheiro – BPR_8064.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 07:23:58"
  },
  {
    "id": 255,
    "number": "255",
    "filename": "255 – © Bruno Pinheiro – BPR_8082.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 07:29:22"
  },
  {
    "id": 256,
    "number": "256",
    "filename": "256 – © Bruno Pinheiro – BPR_8085.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 07:29:48"
  },
  {
    "id": 257,
    "number": "257",
    "filename": "257 – © Bruno Pinheiro – BPR_8080.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 07:28:53"
  },
  {
    "id": 258,
    "number": "258",
    "filename": "258 – © Bruno Pinheiro – BPR_8177-HDR.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 08:24:27"
  },
  {
    "id": 259,
    "number": "259",
    "filename": "259 – © Bruno Pinheiro – BPR_8182-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 08:25:34"
  },
  {
    "id": 260,
    "number": "260",
    "filename": "260 – © Bruno Pinheiro – BPR_8173-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 08:08:32"
  },
  {
    "id": 261,
    "number": "261",
    "filename": "261 – © Bruno Pinheiro – BPR_8186.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 08:26:43"
  },
  {
    "id": 262,
    "number": "262",
    "filename": "262 – © Bruno Pinheiro – BPR_8169.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 08:04:10"
  },
  {
    "id": 263,
    "number": "263",
    "filename": "263 – © Bruno Pinheiro – BPR_8194.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 08:27:46"
  },
  {
    "id": 264,
    "number": "264",
    "filename": "264 – © Bruno Pinheiro – BPR_8197.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 08:28:03"
  },
  {
    "id": 265,
    "number": "265",
    "filename": "265 – © Bruno Pinheiro – BPR_8203.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 2134,
    "height": 3200,
    "aspect": "2/3",
    "time": "2025:01:26 08:28:48"
  },
  {
    "id": 266,
    "number": "266",
    "filename": "266 – © Bruno Pinheiro – BPR_8204.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 08:29:00"
  },
  {
    "id": 267,
    "number": "267",
    "filename": "267 – © Bruno Pinheiro – BPR_8207.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 08:29:42"
  },
  {
    "id": 268,
    "number": "268",
    "filename": "268 – © Bruno Pinheiro – BPR_8211.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 08:30:10"
  },
  {
    "id": 269,
    "number": "269",
    "filename": "269 – © Bruno Pinheiro – BPR_8215.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 08:30:51"
  },
  {
    "id": 270,
    "number": "270",
    "filename": "270 – © Bruno Pinheiro – BPR_8217.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 08:31:07"
  },
  {
    "id": 271,
    "number": "271",
    "filename": "271 – © Bruno Pinheiro – BPR_8219.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 08:31:38"
  },
  {
    "id": 272,
    "number": "272",
    "filename": "272 – © Bruno Pinheiro – BPR_8224.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 08:32:45"
  },
  {
    "id": 273,
    "number": "273",
    "filename": "273 – © Bruno Pinheiro – BPR_8045.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 07:18:37"
  },
  {
    "id": 274,
    "number": "274",
    "filename": "274 – © Bruno Pinheiro – BPR_7095.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:25 15:36:52"
  },
  {
    "id": 275,
    "number": "275",
    "filename": "275 – © Bruno Pinheiro – BPR_5453.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:22 16:41:35"
  },
  {
    "id": 276,
    "number": "276",
    "filename": "276 – © Bruno Pinheiro – BPR_8028.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 06:54:05"
  },
  {
    "id": 277,
    "number": "277",
    "filename": "277 – © Bruno Pinheiro – BPR_7793.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 05:35:24"
  },
  {
    "id": 278,
    "number": "278",
    "filename": "278 – © Bruno Pinheiro – BPR_7852.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 05:52:01"
  },
  {
    "id": 279,
    "number": "279",
    "filename": "279 – © Bruno Pinheiro – BPR_7859.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 05:56:39"
  },
  {
    "id": 280,
    "number": "280",
    "filename": "280 – © Bruno Pinheiro – BPR_7808.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 05:38:42"
  },
  {
    "id": 281,
    "number": "281",
    "filename": "281 – © Bruno Pinheiro – BPR_7801.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 05:37:07"
  },
  {
    "id": 282,
    "number": "282",
    "filename": "282 – © Bruno Pinheiro – BPR_7854.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 05:52:55"
  },
  {
    "id": 283,
    "number": "283",
    "filename": "283 – © Bruno Pinheiro – BPR_7806.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 05:38:02"
  },
  {
    "id": 284,
    "number": "284",
    "filename": "284 – © Bruno Pinheiro – BPR_7902.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 06:19:06"
  },
  {
    "id": 285,
    "number": "285",
    "filename": "285 – © Bruno Pinheiro – BPR_7841.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 05:47:35"
  },
  {
    "id": 286,
    "number": "286",
    "filename": "286 – © Bruno Pinheiro – BPR_7810.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 05:39:42"
  },
  {
    "id": 287,
    "number": "287",
    "filename": "287 – © Bruno Pinheiro – BPR_7812.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 05:40:08"
  },
  {
    "id": 288,
    "number": "288",
    "filename": "288 – © Bruno Pinheiro – BPR_7813.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 05:40:23"
  },
  {
    "id": 289,
    "number": "289",
    "filename": "289 – © Bruno Pinheiro – BPR_7815.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 05:40:48"
  },
  {
    "id": 290,
    "number": "290",
    "filename": "290 – © Bruno Pinheiro – BPR_7833.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 2134,
    "height": 3200,
    "aspect": "2/3",
    "time": "2025:01:26 05:45:21"
  },
  {
    "id": 291,
    "number": "291",
    "filename": "291 – © Bruno Pinheiro – BPR_7845.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 05:48:39"
  },
  {
    "id": 292,
    "number": "292",
    "filename": "292 – © Bruno Pinheiro – BPR_7866.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 05:59:36"
  },
  {
    "id": 293,
    "number": "293",
    "filename": "293 – © Bruno Pinheiro – BPR_8001.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 2800,
    "height": 1868,
    "aspect": "3/2",
    "time": "2025:01:26 06:46:41"
  },
  {
    "id": 294,
    "number": "294",
    "filename": "294 – © Bruno Pinheiro – BPR_8016.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 06:51:37"
  },
  {
    "id": 295,
    "number": "295",
    "filename": "295 – © Bruno Pinheiro – BPR_8018.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 06:51:56"
  },
  {
    "id": 296,
    "number": "296",
    "filename": "296 – © Bruno Pinheiro – BPR_7875-HDR.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 06:03:09"
  },
  {
    "id": 297,
    "number": "297",
    "filename": "297 – © Bruno Pinheiro – BPR_7822.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 05:43:16"
  },
  {
    "id": 298,
    "number": "298",
    "filename": "298 – © Bruno Pinheiro – BPR_7885-HDR.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 06:08:20"
  },
  {
    "id": 299,
    "number": "299",
    "filename": "299 – © Bruno Pinheiro – BPR_7955-HDR.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 06:35:47"
  },
  {
    "id": 300,
    "number": "300",
    "filename": "300 – © Bruno Pinheiro – BPR_7940.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 06:30:32"
  },
  {
    "id": 301,
    "number": "301",
    "filename": "301 – © Bruno Pinheiro – BPR_7943.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 06:31:13"
  },
  {
    "id": 302,
    "number": "302",
    "filename": "302 – © Bruno Pinheiro – BPR_7927.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 06:27:23"
  },
  {
    "id": 303,
    "number": "303",
    "filename": "303 – © Bruno Pinheiro – BPR_7910-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 06:24:03"
  },
  {
    "id": 304,
    "number": "304",
    "filename": "304 – © Bruno Pinheiro – BPR_8007.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 06:48:47"
  },
  {
    "id": 305,
    "number": "305",
    "filename": "305 – © Bruno Pinheiro – BPR_7930.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 06:27:41"
  },
  {
    "id": 306,
    "number": "306",
    "filename": "306 – © Bruno Pinheiro – BPR_7978.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 06:39:48"
  },
  {
    "id": 307,
    "number": "307",
    "filename": "307 – © Bruno Pinheiro – BPR_7989.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 06:42:03"
  },
  {
    "id": 308,
    "number": "308",
    "filename": "308 – © Bruno Pinheiro – BPR_8226.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 08:42:28"
  },
  {
    "id": 309,
    "number": "309",
    "filename": "309 – © Bruno Pinheiro – BPR_5924-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 16:07:10"
  },
  {
    "id": 310,
    "number": "310",
    "filename": "310 – © Bruno Pinheiro – DJI_20250126173257_0035_D.jpg",
    "category": "drone",
    "categoryName": "Drone & Aéreas",
    "tags": [
      "drone",
      "aérea",
      "panorâmica",
      "destaque"
    ],
    "isDrone": true,
    "isHDR": false,
    "width": 3200,
    "height": 1800,
    "aspect": "16/9",
    "time": "2025:01:26 17:32:57"
  },
  {
    "id": 311,
    "number": "311",
    "filename": "311 – © Bruno Pinheiro – DJI_20250123174318_0845_D.jpg",
    "category": "drone",
    "categoryName": "Drone & Aéreas",
    "tags": [
      "drone",
      "aérea",
      "panorâmica",
      "destaque"
    ],
    "isDrone": true,
    "isHDR": false,
    "width": 3200,
    "height": 1800,
    "aspect": "16/9",
    "time": "2025:01:23 17:43:18"
  },
  {
    "id": 312,
    "number": "312",
    "filename": "312 – © Bruno Pinheiro – BPR_7413.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 2134,
    "height": 3200,
    "aspect": "2/3",
    "time": "2025:01:25 16:52:21"
  },
  {
    "id": 313,
    "number": "313",
    "filename": "313 – © Bruno Pinheiro – BPR_6393.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 17:30:27"
  },
  {
    "id": 314,
    "number": "314",
    "filename": "314 – © Bruno Pinheiro – BPR_6351.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 17:18:14"
  },
  {
    "id": 315,
    "number": "315",
    "filename": "315 – © Bruno Pinheiro – BPR_6361.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 17:22:15"
  },
  {
    "id": 316,
    "number": "316",
    "filename": "316 – © Bruno Pinheiro – BPR_6358.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 2134,
    "height": 3200,
    "aspect": "2/3",
    "time": "2025:01:24 17:20:05"
  },
  {
    "id": 317,
    "number": "317",
    "filename": "317 – © Bruno Pinheiro – BPR_6364.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 17:23:17"
  },
  {
    "id": 318,
    "number": "318",
    "filename": "318 – © Bruno Pinheiro – BPR_8900.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 17:50:22"
  },
  {
    "id": 319,
    "number": "319",
    "filename": "319 – © Bruno Pinheiro – BPR_6354.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 17:18:45"
  },
  {
    "id": 320,
    "number": "320",
    "filename": "320 – © Bruno Pinheiro – BPR_8754.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 2134,
    "height": 3200,
    "aspect": "2/3",
    "time": "2025:01:26 16:56:13"
  },
  {
    "id": 321,
    "number": "321",
    "filename": "321 – © Bruno Pinheiro – BPR_6079.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 17:48:49"
  },
  {
    "id": 322,
    "number": "322",
    "filename": "322 – © Bruno Pinheiro – BPR_6338.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 17:12:35"
  },
  {
    "id": 323,
    "number": "323",
    "filename": "323 – © Bruno Pinheiro – BPR_6086-HDR.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 17:54:55"
  },
  {
    "id": 324,
    "number": "324",
    "filename": "324 – © Bruno Pinheiro – BPR_6103-HDR.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 18:01:31"
  },
  {
    "id": 325,
    "number": "325",
    "filename": "325 – © Bruno Pinheiro – BPR_6403-HDR.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 17:34:16"
  },
  {
    "id": 326,
    "number": "326",
    "filename": "326 – © Bruno Pinheiro – BPR_9071.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 18:33:29"
  },
  {
    "id": 327,
    "number": "327",
    "filename": "327 – © Bruno Pinheiro – BPR_9033.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 18:16:22"
  },
  {
    "id": 328,
    "number": "328",
    "filename": "328 – © Bruno Pinheiro – BPR_6115.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 18:04:22"
  },
  {
    "id": 329,
    "number": "329",
    "filename": "329 – © Bruno Pinheiro – BPR_6399.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 17:32:31"
  },
  {
    "id": 330,
    "number": "330",
    "filename": "330 – © Bruno Pinheiro – BPR_9039-HDR.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 18:21:19"
  },
  {
    "id": 331,
    "number": "331",
    "filename": "331 – © Bruno Pinheiro – BPR_9037-HDR.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 18:17:52"
  },
  {
    "id": 332,
    "number": "332",
    "filename": "332 – © Bruno Pinheiro – BPR_8540.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 15:48:10"
  },
  {
    "id": 333,
    "number": "333",
    "filename": "333 – © Bruno Pinheiro – BPR_8566.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 15:57:10"
  },
  {
    "id": 334,
    "number": "334",
    "filename": "334 – © Bruno Pinheiro – BPR_8605.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 16:08:15"
  },
  {
    "id": 335,
    "number": "335",
    "filename": "335 – © Bruno Pinheiro – BPR_8545.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 15:49:29"
  },
  {
    "id": 336,
    "number": "336",
    "filename": "336 – © Bruno Pinheiro – BPR_8564.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 15:56:44"
  },
  {
    "id": 337,
    "number": "337",
    "filename": "337 – © Bruno Pinheiro – BPR_8543.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 15:49:10"
  },
  {
    "id": 338,
    "number": "338",
    "filename": "338 – © Bruno Pinheiro – BPR_8570.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 15:58:03"
  },
  {
    "id": 339,
    "number": "339",
    "filename": "339 – © Bruno Pinheiro – BPR_8555-HDR.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 15:55:42"
  },
  {
    "id": 340,
    "number": "340",
    "filename": "340 – © Bruno Pinheiro – BPR_8537.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 15:47:09"
  },
  {
    "id": 341,
    "number": "341",
    "filename": "341 – © Bruno Pinheiro – BPR_8620-HDR.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 16:14:52"
  },
  {
    "id": 342,
    "number": "342",
    "filename": "342 – © Bruno Pinheiro – BPR_6397.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 17:32:02"
  },
  {
    "id": 343,
    "number": "343",
    "filename": "343 – © Bruno Pinheiro – BPR_6377-HDR.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 17:27:25"
  },
  {
    "id": 344,
    "number": "344",
    "filename": "344 – © Bruno Pinheiro – BPR_6380-HDR.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 17:28:05"
  },
  {
    "id": 345,
    "number": "345",
    "filename": "345 – © Bruno Pinheiro – BPR_6388.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 17:28:59"
  },
  {
    "id": 346,
    "number": "346",
    "filename": "346 – © Bruno Pinheiro – BPR_9049-HDR.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 18:24:50"
  },
  {
    "id": 347,
    "number": "347",
    "filename": "347 – © Bruno Pinheiro – BPR_8585-HDR.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 16:04:52"
  },
  {
    "id": 348,
    "number": "348",
    "filename": "348 – © Bruno Pinheiro – BPR_6112.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 18:03:38"
  },
  {
    "id": 349,
    "number": "349",
    "filename": "349 – © Bruno Pinheiro – BPR_6348-HDR.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 17:17:48"
  },
  {
    "id": 350,
    "number": "350",
    "filename": "350 – © Bruno Pinheiro – BPR_6091-HDR.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 17:57:25"
  },
  {
    "id": 351,
    "number": "351",
    "filename": "351 – © Bruno Pinheiro – BPR_6341-HDR.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 17:13:51"
  },
  {
    "id": 352,
    "number": "352",
    "filename": "352 – © Bruno Pinheiro – BPR_6337.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 17:12:11"
  },
  {
    "id": 353,
    "number": "353",
    "filename": "353 – © Bruno Pinheiro – BPR_6395.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 17:30:46"
  },
  {
    "id": 354,
    "number": "354",
    "filename": "354 – © Bruno Pinheiro – BPR_7483.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:25 17:14:14"
  },
  {
    "id": 355,
    "number": "355",
    "filename": "355 – © Bruno Pinheiro – BPR_7501.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:25 17:17:20"
  },
  {
    "id": 356,
    "number": "356",
    "filename": "356 – © Bruno Pinheiro – BPR_8808.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 17:33:43"
  },
  {
    "id": 357,
    "number": "357",
    "filename": "357 – © Bruno Pinheiro – BPR_8951.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 18:00:03"
  },
  {
    "id": 358,
    "number": "358",
    "filename": "358 – © Bruno Pinheiro – BPR_6409.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 17:39:16"
  },
  {
    "id": 359,
    "number": "359",
    "filename": "359 – © Bruno Pinheiro – BPR_8944.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 17:58:54"
  },
  {
    "id": 360,
    "number": "360",
    "filename": "360 – © Bruno Pinheiro – BPR_6411.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 17:40:04"
  },
  {
    "id": 361,
    "number": "361",
    "filename": "361 – © Bruno Pinheiro – BPR_8815.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 17:35:18"
  },
  {
    "id": 362,
    "number": "362",
    "filename": "362 – © Bruno Pinheiro – BPR_8822.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 17:37:08"
  },
  {
    "id": 363,
    "number": "363",
    "filename": "363 – © Bruno Pinheiro – BPR_8820.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 17:36:30"
  },
  {
    "id": 364,
    "number": "364",
    "filename": "364 – © Bruno Pinheiro – BPR_8941.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 17:57:52"
  },
  {
    "id": 365,
    "number": "365",
    "filename": "365 – © Bruno Pinheiro – BPR_8939.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 17:57:23"
  },
  {
    "id": 366,
    "number": "366",
    "filename": "366 – © Bruno Pinheiro – BPR_8918.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 2134,
    "height": 3200,
    "aspect": "2/3",
    "time": "2025:01:26 17:53:58"
  },
  {
    "id": 367,
    "number": "367",
    "filename": "367 – © Bruno Pinheiro – BPR_8829-HDR.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 17:38:56"
  },
  {
    "id": 368,
    "number": "368",
    "filename": "368 – © Bruno Pinheiro – BPR_8832-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 17:39:29"
  },
  {
    "id": 369,
    "number": "369",
    "filename": "369 – © Bruno Pinheiro – BPR_6456.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 17:54:34"
  },
  {
    "id": 370,
    "number": "370",
    "filename": "370 – © Bruno Pinheiro – BPR_6467.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 17:58:09"
  },
  {
    "id": 371,
    "number": "371",
    "filename": "371 – © Bruno Pinheiro – BPR_8910-HDR.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 17:53:01"
  },
  {
    "id": 372,
    "number": "372",
    "filename": "372 – © Bruno Pinheiro – BPR_6444-HDR.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 17:51:52"
  },
  {
    "id": 373,
    "number": "373",
    "filename": "373 – © Bruno Pinheiro – BPR_9149-HDR.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 15:55:36"
  },
  {
    "id": 374,
    "number": "374",
    "filename": "374 – © Bruno Pinheiro – BPR_9169.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 15:58:11"
  },
  {
    "id": 375,
    "number": "375",
    "filename": "375 – © Bruno Pinheiro – BPR_8925.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 17:55:10"
  },
  {
    "id": 376,
    "number": "376",
    "filename": "376 – © Bruno Pinheiro – BPR_8937.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 17:56:48"
  },
  {
    "id": 377,
    "number": "377",
    "filename": "377 – © Bruno Pinheiro – BPR_8955.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 18:00:45"
  },
  {
    "id": 378,
    "number": "378",
    "filename": "378 – © Bruno Pinheiro – BPR_9028-HDR.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 18:15:31"
  },
  {
    "id": 379,
    "number": "379",
    "filename": "379 – © Bruno Pinheiro – BPR_8381.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 12:42:53"
  },
  {
    "id": 380,
    "number": "380",
    "filename": "380 – © Bruno Pinheiro – BPR_8386.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 12:43:45"
  },
  {
    "id": 381,
    "number": "381",
    "filename": "381 – © Bruno Pinheiro – BPR_8387.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 12:43:56"
  },
  {
    "id": 382,
    "number": "382",
    "filename": "382 – © Bruno Pinheiro – BPR_8389.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 12:44:12"
  },
  {
    "id": 383,
    "number": "383",
    "filename": "383 – © Bruno Pinheiro – BPR_8408.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 12:48:44"
  },
  {
    "id": 384,
    "number": "384",
    "filename": "384 – © Bruno Pinheiro – BPR_8391.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 12:44:52"
  },
  {
    "id": 385,
    "number": "385",
    "filename": "385 – © Bruno Pinheiro – BPR_8393.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 12:45:24"
  },
  {
    "id": 386,
    "number": "386",
    "filename": "386 – © Bruno Pinheiro – BPR_8395.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 12:45:49"
  },
  {
    "id": 387,
    "number": "387",
    "filename": "387 – © Bruno Pinheiro – BPR_8399.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 12:46:43"
  },
  {
    "id": 388,
    "number": "388",
    "filename": "388 – © Bruno Pinheiro – BPR_8401.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 12:47:30"
  },
  {
    "id": 389,
    "number": "389",
    "filename": "389 – © Bruno Pinheiro – BPR_8404.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 12:47:52"
  },
  {
    "id": 390,
    "number": "390",
    "filename": "390 – © Bruno Pinheiro – BPR_8407.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 12:48:29"
  },
  {
    "id": 391,
    "number": "391",
    "filename": "391 – © Bruno Pinheiro – BPR_8413.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 12:49:37"
  },
  {
    "id": 392,
    "number": "392",
    "filename": "392 – © Bruno Pinheiro – BPR_8671.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 16:27:48"
  },
  {
    "id": 393,
    "number": "393",
    "filename": "393 – © Bruno Pinheiro – BPR_8691.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 16:34:22"
  },
  {
    "id": 394,
    "number": "394",
    "filename": "394 – © Bruno Pinheiro – BPR_8639-HDR.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 16:18:24"
  },
  {
    "id": 395,
    "number": "395",
    "filename": "395 – © Bruno Pinheiro – BPR_8655.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 16:25:03"
  },
  {
    "id": 396,
    "number": "396",
    "filename": "396 – © Bruno Pinheiro – BPR_8646-HDR.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 16:23:34"
  },
  {
    "id": 397,
    "number": "397",
    "filename": "397 – © Bruno Pinheiro – BPR_8659.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 16:25:41"
  },
  {
    "id": 398,
    "number": "398",
    "filename": "398 – © Bruno Pinheiro – BPR_8683-HDR.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 16:31:46"
  },
  {
    "id": 399,
    "number": "399",
    "filename": "399 – © Bruno Pinheiro – DJI_20250122155231_0742_D.jpg",
    "category": "drone",
    "categoryName": "Drone & Aéreas",
    "tags": [
      "drone",
      "aérea",
      "panorâmica",
      "destaque"
    ],
    "isDrone": true,
    "isHDR": false,
    "width": 3200,
    "height": 1800,
    "aspect": "16/9",
    "time": "2025:01:22 15:52:31"
  },
  {
    "id": 400,
    "number": "400",
    "filename": "400 – © Bruno Pinheiro – BPR_7698.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:25 18:11:47"
  },
  {
    "id": 401,
    "number": "401",
    "filename": "401 – © Bruno Pinheiro – DJI_20250125175546_0976_D.jpg",
    "category": "drone",
    "categoryName": "Drone & Aéreas",
    "tags": [
      "drone",
      "aérea",
      "panorâmica",
      "destaque"
    ],
    "isDrone": true,
    "isHDR": false,
    "width": 3200,
    "height": 1800,
    "aspect": "16/9",
    "time": "2025:01:25 17:55:46"
  },
  {
    "id": 402,
    "number": "402",
    "filename": "402 – © Bruno Pinheiro – DJI_20250125174028_0947_D.jpg",
    "category": "drone",
    "categoryName": "Drone & Aéreas",
    "tags": [
      "drone",
      "aérea",
      "panorâmica",
      "destaque"
    ],
    "isDrone": true,
    "isHDR": false,
    "width": 3200,
    "height": 1800,
    "aspect": "16/9",
    "time": "2025:01:25 17:40:28"
  },
  {
    "id": 403,
    "number": "403",
    "filename": "403 – © Bruno Pinheiro – DJI_20250123174412_0846_D.jpg",
    "category": "drone",
    "categoryName": "Drone & Aéreas",
    "tags": [
      "drone",
      "aérea",
      "panorâmica",
      "destaque"
    ],
    "isDrone": true,
    "isHDR": false,
    "width": 3200,
    "height": 1800,
    "aspect": "16/9",
    "time": "2025:01:23 17:44:12"
  },
  {
    "id": 404,
    "number": "404",
    "filename": "404 – © Bruno Pinheiro – BPR_6440-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 17:51:04"
  },
  {
    "id": 405,
    "number": "405",
    "filename": "405 – © Bruno Pinheiro – BPR_7538.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:25 17:23:48"
  },
  {
    "id": 406,
    "number": "406",
    "filename": "406 – © Bruno Pinheiro – DJI_20250123174050_0840_D.jpg",
    "category": "drone",
    "categoryName": "Drone & Aéreas",
    "tags": [
      "drone",
      "aérea",
      "panorâmica",
      "destaque"
    ],
    "isDrone": true,
    "isHDR": false,
    "width": 3200,
    "height": 1800,
    "aspect": "16/9",
    "time": "2025:01:23 17:40:50"
  },
  {
    "id": 407,
    "number": "407",
    "filename": "407 – © Bruno Pinheiro – BPR_6055-HDR.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 17:44:03"
  },
  {
    "id": 408,
    "number": "408",
    "filename": "408 – © Bruno Pinheiro – BPR_7541.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:25 17:24:02"
  },
  {
    "id": 409,
    "number": "409",
    "filename": "409 – © Bruno Pinheiro – DJI_20250125173916_0943_D.jpg",
    "category": "drone",
    "categoryName": "Drone & Aéreas",
    "tags": [
      "drone",
      "aérea",
      "panorâmica",
      "destaque"
    ],
    "isDrone": true,
    "isHDR": false,
    "width": 3200,
    "height": 1800,
    "aspect": "16/9",
    "time": "2025:01:25 17:39:16"
  },
  {
    "id": 410,
    "number": "410",
    "filename": "410 – © Bruno Pinheiro – BPR_7555.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:25 17:24:49"
  },
  {
    "id": 411,
    "number": "411",
    "filename": "411 – © Bruno Pinheiro – BPR_8979.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 2134,
    "height": 3200,
    "aspect": "2/3",
    "time": "2025:01:26 18:04:43"
  },
  {
    "id": 412,
    "number": "412",
    "filename": "412 – © Bruno Pinheiro – BPR_7675.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 2134,
    "height": 3200,
    "aspect": "2/3",
    "time": "2025:01:25 18:04:40"
  },
  {
    "id": 413,
    "number": "413",
    "filename": "413 – © Bruno Pinheiro – BPR_6061-HDR.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 17:44:46"
  },
  {
    "id": 414,
    "number": "414",
    "filename": "414 – © Bruno Pinheiro – BPR_8982-HDR.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 18:06:30"
  },
  {
    "id": 415,
    "number": "415",
    "filename": "415 – © Bruno Pinheiro – BPR_7664.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 2134,
    "height": 3200,
    "aspect": "2/3",
    "time": "2025:01:25 18:03:56"
  },
  {
    "id": 416,
    "number": "416",
    "filename": "416 – © Bruno Pinheiro – BPR_6477.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 18:06:15"
  },
  {
    "id": 417,
    "number": "417",
    "filename": "417 – © Bruno Pinheiro – BPR_6501.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 18:35:14"
  },
  {
    "id": 418,
    "number": "418",
    "filename": "418 – © Bruno Pinheiro – BPR_6069.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:23 17:46:06"
  },
  {
    "id": 419,
    "number": "419",
    "filename": "419 – © Bruno Pinheiro – BPR_8764.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 16:58:42"
  },
  {
    "id": 420,
    "number": "420",
    "filename": "420 – © Bruno Pinheiro – BPR_8711.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 16:45:35"
  },
  {
    "id": 421,
    "number": "421",
    "filename": "421 – © Bruno Pinheiro – BPR_8721.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 16:49:57"
  },
  {
    "id": 422,
    "number": "422",
    "filename": "422 – © Bruno Pinheiro – BPR_8751.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 16:55:32"
  },
  {
    "id": 423,
    "number": "423",
    "filename": "423 – © Bruno Pinheiro – DJI_20250126173948_0055_D.jpg",
    "category": "drone",
    "categoryName": "Drone & Aéreas",
    "tags": [
      "drone",
      "aérea",
      "panorâmica",
      "destaque"
    ],
    "isDrone": true,
    "isHDR": false,
    "width": 3200,
    "height": 1800,
    "aspect": "16/9",
    "time": "2025:01:26 17:39:48"
  },
  {
    "id": 424,
    "number": "424",
    "filename": "424 – © Bruno Pinheiro – BPR_8706.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 16:43:44"
  },
  {
    "id": 425,
    "number": "425",
    "filename": "425 – © Bruno Pinheiro – BPR_8748.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 16:54:56"
  },
  {
    "id": 426,
    "number": "426",
    "filename": "426 – © Bruno Pinheiro – BPR_7632.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 2134,
    "height": 3200,
    "aspect": "2/3",
    "time": "2025:01:25 17:59:44"
  },
  {
    "id": 427,
    "number": "427",
    "filename": "427 – © Bruno Pinheiro – DJI_20250123055213_0797_D.jpg",
    "category": "drone",
    "categoryName": "Drone & Aéreas",
    "tags": [
      "drone",
      "aérea",
      "panorâmica",
      "destaque"
    ],
    "isDrone": true,
    "isHDR": false,
    "width": 3200,
    "height": 1800,
    "aspect": "16/9",
    "time": "2025:01:23 05:52:13"
  },
  {
    "id": 428,
    "number": "428",
    "filename": "428 – © Bruno Pinheiro – DJI_20250126173701_0047_D.jpg",
    "category": "drone",
    "categoryName": "Drone & Aéreas",
    "tags": [
      "drone",
      "aérea",
      "panorâmica",
      "destaque"
    ],
    "isDrone": true,
    "isHDR": false,
    "width": 3200,
    "height": 1800,
    "aspect": "16/9",
    "time": "2025:01:26 17:37:01"
  },
  {
    "id": 429,
    "number": "429",
    "filename": "429 – © Bruno Pinheiro – BPR_8714.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 16:46:32"
  },
  {
    "id": 430,
    "number": "430",
    "filename": "430 – © Bruno Pinheiro – BPR_8720.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 16:47:39"
  },
  {
    "id": 431,
    "number": "431",
    "filename": "431 – © Bruno Pinheiro – DJI_20250128165708_0002_D.jpg",
    "category": "drone",
    "categoryName": "Drone & Aéreas",
    "tags": [
      "drone",
      "aérea",
      "panorâmica",
      "destaque"
    ],
    "isDrone": true,
    "isHDR": false,
    "width": 3200,
    "height": 1800,
    "aspect": "16/9",
    "time": "2025:01:28 16:57:08"
  },
  {
    "id": 432,
    "number": "432",
    "filename": "432 – © Bruno Pinheiro – BPR_9406-HDR.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 18:00:03"
  },
  {
    "id": 433,
    "number": "433",
    "filename": "433 – © Bruno Pinheiro – BPR_9431.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 18:05:15"
  },
  {
    "id": 434,
    "number": "434",
    "filename": "434 – © Bruno Pinheiro – BPR_9432-HDR.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 18:06:47"
  },
  {
    "id": 435,
    "number": "435",
    "filename": "435 – © Bruno Pinheiro – BPR_9410-HDR.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 18:01:24"
  },
  {
    "id": 436,
    "number": "436",
    "filename": "436 – © Bruno Pinheiro – BPR_9426.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 18:04:24"
  },
  {
    "id": 437,
    "number": "437",
    "filename": "437 – © Bruno Pinheiro – BPR_9416.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 18:02:52"
  },
  {
    "id": 438,
    "number": "438",
    "filename": "438 – © Bruno Pinheiro – BPR_9419.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 18:03:29"
  },
  {
    "id": 439,
    "number": "439",
    "filename": "439 – © Bruno Pinheiro – BPR_9429.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 18:04:55"
  },
  {
    "id": 440,
    "number": "440",
    "filename": "440 – © Bruno Pinheiro – BPR_9444.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 18:08:44"
  },
  {
    "id": 441,
    "number": "441",
    "filename": "441 – © Bruno Pinheiro – BPR_8738.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 16:51:45"
  },
  {
    "id": 442,
    "number": "442",
    "filename": "442 – © Bruno Pinheiro – BPR_9174-HDR.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 16:21:37"
  },
  {
    "id": 443,
    "number": "443",
    "filename": "443 – © Bruno Pinheiro – BPR_9183-HDR.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 16:23:34"
  },
  {
    "id": 444,
    "number": "444",
    "filename": "444 – © Bruno Pinheiro – BPR_9187-HDR.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 16:24:51"
  },
  {
    "id": 445,
    "number": "445",
    "filename": "445 – © Bruno Pinheiro – BPR_9197.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 16:26:32"
  },
  {
    "id": 446,
    "number": "446",
    "filename": "446 – © Bruno Pinheiro – BPR_9201.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 16:27:24"
  },
  {
    "id": 447,
    "number": "447",
    "filename": "447 – © Bruno Pinheiro – BPR_9208.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 16:30:07"
  },
  {
    "id": 448,
    "number": "448",
    "filename": "448 – © Bruno Pinheiro – BPR_9192.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 16:25:27"
  },
  {
    "id": 449,
    "number": "449",
    "filename": "449 – © Bruno Pinheiro – BPR_9202.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 16:27:51"
  },
  {
    "id": 450,
    "number": "450",
    "filename": "450 – © Bruno Pinheiro – BPR_9206.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 16:29:16"
  },
  {
    "id": 451,
    "number": "451",
    "filename": "451 – © Bruno Pinheiro – BPR_9211.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 16:30:58"
  },
  {
    "id": 452,
    "number": "452",
    "filename": "452 – © Bruno Pinheiro – DJI_20250126085801_0994_D.jpg",
    "category": "drone",
    "categoryName": "Drone & Aéreas",
    "tags": [
      "drone",
      "aérea",
      "panorâmica",
      "destaque"
    ],
    "isDrone": true,
    "isHDR": false,
    "width": 3200,
    "height": 1800,
    "aspect": "16/9",
    "time": "2025:01:26 08:58:01"
  },
  {
    "id": 453,
    "number": "453",
    "filename": "453 – © Bruno Pinheiro – DJI_20250128165926_0009_D.jpg",
    "category": "drone",
    "categoryName": "Drone & Aéreas",
    "tags": [
      "drone",
      "aérea",
      "panorâmica",
      "destaque"
    ],
    "isDrone": true,
    "isHDR": false,
    "width": 3200,
    "height": 1800,
    "aspect": "16/9",
    "time": "2025:01:28 16:59:26"
  },
  {
    "id": 454,
    "number": "454",
    "filename": "454 – © Bruno Pinheiro – BPR_9214-HDR.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 16:34:18"
  },
  {
    "id": 455,
    "number": "455",
    "filename": "455 – © Bruno Pinheiro – BPR_9220.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 16:36:20"
  },
  {
    "id": 456,
    "number": "456",
    "filename": "456 – © Bruno Pinheiro – BPR_9231-HDR.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 16:53:07"
  },
  {
    "id": 457,
    "number": "457",
    "filename": "457 – © Bruno Pinheiro – BPR_9222-HDR.jpg",
    "category": "suites",
    "categoryName": "Suítes & Dormitórios",
    "tags": [
      "suíte",
      "quarto",
      "hospedagem"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 16:37:39"
  },
  {
    "id": 458,
    "number": "458",
    "filename": "458 – © Bruno Pinheiro – BPR_9236.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 2134,
    "height": 3200,
    "aspect": "2/3",
    "time": "2025:01:28 16:53:43"
  },
  {
    "id": 459,
    "number": "459",
    "filename": "459 – © Bruno Pinheiro – BPR_9237-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 16:55:51"
  },
  {
    "id": 460,
    "number": "460",
    "filename": "460 – © Bruno Pinheiro – BPR_9242-HDR.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 16:56:59"
  },
  {
    "id": 461,
    "number": "461",
    "filename": "461 – © Bruno Pinheiro – BPR_9261-HDR.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 17:03:07"
  },
  {
    "id": 462,
    "number": "462",
    "filename": "462 – © Bruno Pinheiro – BPR_9247.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 16:58:28"
  },
  {
    "id": 463,
    "number": "463",
    "filename": "463 – © Bruno Pinheiro – BPR_9251.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 16:59:19"
  },
  {
    "id": 464,
    "number": "464",
    "filename": "464 – © Bruno Pinheiro – BPR_9252.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 16:59:31"
  },
  {
    "id": 465,
    "number": "465",
    "filename": "465 – © Bruno Pinheiro – BPR_9270.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 2134,
    "height": 3200,
    "aspect": "2/3",
    "time": "2025:01:28 17:04:22"
  },
  {
    "id": 466,
    "number": "466",
    "filename": "466 – © Bruno Pinheiro – BPR_9286.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "gourmet",
      "lounge"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 17:08:17"
  },
  {
    "id": 467,
    "number": "467",
    "filename": "467 – © Bruno Pinheiro – BPR_9291.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 17:08:57"
  },
  {
    "id": 468,
    "number": "468",
    "filename": "468 – © Bruno Pinheiro – BPR_9293.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 17:09:33"
  },
  {
    "id": 469,
    "number": "469",
    "filename": "469 – © Bruno Pinheiro – BPR_9294.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 17:10:09"
  },
  {
    "id": 470,
    "number": "470",
    "filename": "470 – © Bruno Pinheiro – BPR_9275-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 17:05:36"
  },
  {
    "id": 471,
    "number": "471",
    "filename": "471 – © Bruno Pinheiro – BPR_9278-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 17:06:48"
  },
  {
    "id": 472,
    "number": "472",
    "filename": "472 – © Bruno Pinheiro – BPR_9302-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 17:13:47"
  },
  {
    "id": 473,
    "number": "473",
    "filename": "473 – © Bruno Pinheiro – BPR_9310-HDR.jpg",
    "category": "social",
    "categoryName": "Áreas Sociais & Gourmet",
    "tags": [
      "social",
      "living",
      "gourmet",
      "sala"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 17:23:21"
  },
  {
    "id": 474,
    "number": "474",
    "filename": "474 – © Bruno Pinheiro – BPR_9313-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 17:24:02"
  },
  {
    "id": 475,
    "number": "475",
    "filename": "475 – © Bruno Pinheiro – BPR_8367-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 12:39:31"
  },
  {
    "id": 476,
    "number": "476",
    "filename": "476 – © Bruno Pinheiro – BPR_8353-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 12:36:11"
  },
  {
    "id": 477,
    "number": "477",
    "filename": "477 – © Bruno Pinheiro – BPR_8358.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 12:36:44"
  },
  {
    "id": 478,
    "number": "478",
    "filename": "478 – © Bruno Pinheiro – BPR_8372.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 12:40:06"
  },
  {
    "id": 479,
    "number": "479",
    "filename": "479 – © Bruno Pinheiro – BPR_8359-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 12:38:14"
  },
  {
    "id": 480,
    "number": "480",
    "filename": "480 – © Bruno Pinheiro – BPR_8363-HDR.jpg",
    "category": "piscina",
    "categoryName": "Piscina & Área Externa",
    "tags": [
      "piscina",
      "área externa",
      "deck",
      "jardim"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:26 12:38:46"
  },
  {
    "id": 481,
    "number": "481",
    "filename": "481 – © Bruno Pinheiro – BPR_9464.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 18:17:16"
  },
  {
    "id": 482,
    "number": "482",
    "filename": "482 – © Bruno Pinheiro – BPR_9465.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 18:17:37"
  },
  {
    "id": 483,
    "number": "483",
    "filename": "483 – © Bruno Pinheiro – BPR_9466.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:28 18:17:52"
  },
  {
    "id": 484,
    "number": "484",
    "filename": "484 – © Bruno Pinheiro – DJI_20250124183613_0926_D.jpg",
    "category": "drone",
    "categoryName": "Drone & Aéreas",
    "tags": [
      "drone",
      "aérea",
      "panorâmica",
      "destaque"
    ],
    "isDrone": true,
    "isHDR": false,
    "width": 3200,
    "height": 1800,
    "aspect": "16/9",
    "time": "2025:01:24 18:36:13"
  },
  {
    "id": 485,
    "number": "485",
    "filename": "485 – © Bruno Pinheiro – BPR_6498-HDR.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:24 18:34:32"
  },
  {
    "id": 486,
    "number": "486",
    "filename": "486 – © Bruno Pinheiro – DJI_20250122183125_0766_D.jpg",
    "category": "drone",
    "categoryName": "Drone & Aéreas",
    "tags": [
      "drone",
      "aérea",
      "panorâmica",
      "destaque"
    ],
    "isDrone": true,
    "isHDR": false,
    "width": 3200,
    "height": 1800,
    "aspect": "16/9",
    "time": "2025:01:22 18:31:25"
  },
  {
    "id": 487,
    "number": "487",
    "filename": "487 – © Bruno Pinheiro – DJI_20250122183617_0777_D.jpg",
    "category": "drone",
    "categoryName": "Drone & Aéreas",
    "tags": [
      "drone",
      "aérea",
      "panorâmica",
      "destaque"
    ],
    "isDrone": true,
    "isHDR": false,
    "width": 3200,
    "height": 1800,
    "aspect": "16/9",
    "time": "2025:01:22 18:36:17"
  },
  {
    "id": 488,
    "number": "488",
    "filename": "488 – © Bruno Pinheiro – DJI_20250122183841_0785_D.jpg",
    "category": "drone",
    "categoryName": "Drone & Aéreas",
    "tags": [
      "drone",
      "aérea",
      "panorâmica",
      "destaque"
    ],
    "isDrone": true,
    "isHDR": false,
    "width": 3200,
    "height": 1800,
    "aspect": "16/9",
    "time": "2025:01:22 18:38:41"
  },
  {
    "id": 489,
    "number": "489",
    "filename": "489 – © Bruno Pinheiro – BPR_7712.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:25 18:28:18"
  },
  {
    "id": 490,
    "number": "490",
    "filename": "490 – © Bruno Pinheiro – DJI_20250125184015_0984_D.jpg",
    "category": "drone",
    "categoryName": "Drone & Aéreas",
    "tags": [
      "drone",
      "aérea",
      "panorâmica",
      "destaque"
    ],
    "isDrone": true,
    "isHDR": false,
    "width": 3200,
    "height": 1800,
    "aspect": "16/9",
    "time": "2025:01:25 18:40:15"
  },
  {
    "id": 491,
    "number": "491",
    "filename": "491 – © Bruno Pinheiro – BPR_7748-HDR.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:25 18:42:45"
  },
  {
    "id": 492,
    "number": "492",
    "filename": "492 – © Bruno Pinheiro – BPR_7722.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": false,
    "width": 2134,
    "height": 3200,
    "aspect": "2/3",
    "time": "2025:01:25 18:28:39"
  },
  {
    "id": 493,
    "number": "493",
    "filename": "493 – © Bruno Pinheiro – DJI_20250124183039_0912_D.jpg",
    "category": "drone",
    "categoryName": "Drone & Aéreas",
    "tags": [
      "drone",
      "aérea",
      "panorâmica",
      "destaque"
    ],
    "isDrone": true,
    "isHDR": false,
    "width": 3200,
    "height": 1800,
    "aspect": "16/9",
    "time": "2025:01:24 18:30:39"
  },
  {
    "id": 494,
    "number": "494",
    "filename": "494 – © Bruno Pinheiro – BPR_5652-HDR.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:22 20:11:47"
  },
  {
    "id": 495,
    "number": "495",
    "filename": "495 – © Bruno Pinheiro – BPR_5629-HDR.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:22 19:51:38"
  },
  {
    "id": 496,
    "number": "496",
    "filename": "496 – © Bruno Pinheiro – BPR_7763-HDR.jpg",
    "category": "noite",
    "categoryName": "Entardecer & Noite",
    "tags": [
      "noite",
      "iluminação",
      "crepúsculo",
      "noturna"
    ],
    "isDrone": false,
    "isHDR": true,
    "width": 3200,
    "height": 2134,
    "aspect": "3/2",
    "time": "2025:01:25 19:03:50"
  }
];
