import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <title>FS Hortifruti</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
        <meta
          name="keywords"
          content="hortifruti, delivery, frutas, verduras, legumes, orgânicos, saudável, fresco, entrega em casa, cesta de frutas, alimentação saudável, produtos naturais, compra de frutas online, compra de verduras online, mercado orgânico, legumes frescos, mercado saudável, delivery de alimentos, entrega de hortifruti, comprar frutas, comprar verduras"
        />

        <meta name="author" content="BTech - Web Solutions" />
        <meta
          name="keywords"
          content="hortifruti, delivery, frutas, verduras, legumes, orgânicos, saudável, fresco, entrega em casa"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="font-[DM Sans]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
