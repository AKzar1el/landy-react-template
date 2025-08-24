// src/content/about.ts
import type { SectionItem } from "../components/ContentBlock/types";

export const AboutContent: {
  title: string;
  text: string;
  section: SectionItem[];
} = {
  title: "Primeri uporabe – najpogostejši postopki (informativno)",
  text: "Kratki vodiči z uradnimi viri. Tomlero je AI orodje za pravne informacije (ne nasvete). Brezplačno za vse.",
  section: [
    {
      title: "Spletni nakup: odstop v 14 dneh",
      content:
        "Kdaj in kako uveljaviti pravico do odstopa pri nakupu na daljavo; kaj mora trgovec.",
      icon: "cart.svg",
      ctas: [
        {
          label: "Preberi ZVPot-1 (odstop)",
          href: "https://pisrs.si/pregledPredpisa?id=ZAKO7054",
          variant: "primary" as const
        },
        {
          label: "Prijava na TIRS",
          href: "https://www.gov.si/zbirke/storitve/prijava-krsitve-trznemu-inspektoratu/",
          variant: "secondary" as const
        }
      ]
    },
    {
      title: "Prekršek: ugovor plačilnemu nalogu",
      content:
        "Roki, vsebina ugovora, kam vložiti; razlika do zahteve za sodno varstvo.",
      icon: "ticket.svg",
      ctas: [
        {
          label: "Zakon o prekrških (ZP-1)",
          href: "https://pisrs.si/Pis.web/pregledPredpisa?id=ZAKO2537",
          variant: "primary" as const
        }
      ]
    },
    {
      title: "Zaposlitev: odpoved in pravno varstvo",
      content:
        "Vrste odpovedi, roki in tipični koraki, kam se obrniti.",
      icon: "briefcase.svg",
      ctas: [
        {
          label: "Zakon o delovnih razmerjih (ZDR-1)",
          href: "https://pisrs.si/pregledPredpisa?id=ZAKO5944",
          variant: "primary" as const
        }
      ]
    },
    {
      title: "Brezplačna pravna pomoč (BPP)",
      content:
        "Kdo je upravičen, obrazci, kako in kje oddati vlogo.",
      icon: "scale.svg",
      ctas: [
        {
          label: "Vloga za BPP (eUprava)",
          href: "https://e-uprava.gov.si/podrocja/vloge/vloga.html?id=1225",
          variant: "primary" as const
        },
        {
          label: "Zakon o BPP (ZBPP)",
          href: "https://pisrs.si/pregledPredpisa?id=ZAKO1265",
          variant: "secondary" as const
        }
      ]
    }
  ]
};
