import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Henrique Junkes | Portfólio</title>
        <meta name="description" content="Portfólio de Henrique Junkes, desenvolvedor full stack." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <h1 className={styles.title}>Henrique Junkes</h1>
          <p className={styles.description}>
            Desenvolvedor de sistemas apaixonado por tecnologia, com foco em soluções web escaláveis e interfaces modernas.
          </p>

          <section className={styles.section}>
            <h2>🛠️ Experiência</h2>
            <ul>
              <li>+6 anos de experiência em desenvolvimento</li>
              <li>Especialista em Java, JavaScript, TypeScript, Python e Go</li>
              <li>Consultor na NTT DATA alocado no Itaú</li>
              <li>Criação de APIs performáticas com chamadas assíncronas</li>
              <li>Desenvolvedor da plataforma vitrine-me.com</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>📁 Projetos</h2>
            <ul>
              <li>
                <a href="https://vitrine-me.com" target="_blank" rel="noopener noreferrer">
                  Vitrine-me: Plataforma para criação de sites institucionais
                </a>
              </li>
              <li>
                <a href="https://vitrine-me.com/automacao" target="_blank" rel="noopener noreferrer">
                  Vitrine-me Automação: Automação de Leads B2B
                </a>
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>📫 Contato</h2>
            <p>Entre em contato comigo via <a href="mailto:henriquejunkes887@gmail.com">e-mail</a> ou pelo <a href="https://www.linkedin.com/in/henrique-alves-junkes/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
          </section>
        </main>

        <footer className={styles.footer}>
          <p>&copy; {new Date().getFullYear()} Henrique Junkes. Todos os direitos reservados.</p>
        </footer>
      </div>
    </>
  );
}
