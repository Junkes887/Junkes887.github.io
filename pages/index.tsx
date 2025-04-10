import Head from "next/head";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Image,
  List,
  ListItem,
  Link,
  Divider,
} from "@chakra-ui/react";

import Typewriter from "../components/Typewriter"; // ajuste o path se necessário
import { TypewriterProvider } from "@/components/TypewriterContext";

export default function Home() {
  return (
    <>
      <Head>
        <title>Henrique Junkes | Portfólio</title>
        <meta
          name="description"
          content="Portfólio de Henrique Junkes, desenvolvedor full stack."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <TypewriterProvider>
        <Box bg="#000000" color="#C0C0C0" minH="100vh" py={10} fontFamily="monospace">
          <Container maxW="container.md">
            <Box
              p={6}
              borderRadius="md"
              boxShadow="md"
              border="1px solid #333"
            >
              <VStack spacing={6} textAlign="left" align="start">
                <Image
                  src="/henrique.jpeg"
                  alt="Henrique Junkes"
                  borderRadius="full"
                  boxSize="120px"
                  border="2px solid #C0C0C0"
                  objectFit="cover"
                />
                <Heading as="h1" size="lg" color="#01D401">
                  <Typewriter text="$ Henrique Junkes" order={0}/>
                </Heading>
                <Typewriter text="Desenvolvedor de sistemas apaixonado por tecnologia, com foco em soluções web escaláveis e interfaces modernas." order={1} />
              </VStack>

              <Divider my={6} borderColor="#444" />

              <Box as="section" mb={8}>
                <Heading as="h2" size="md" mb={4} color="#01D401">
                  <Typewriter text="> Experiência" order={2} />
                </Heading>
                <List spacing={2} pl={4}>
                  <ListItem><Typewriter text="- Mais de 6 anos de experiência em desenvolvimento de software" order={3} /></ListItem>
                  <ListItem><Typewriter text="- Especialista em Java, JavaScript e Go" order={4} /></ListItem>
                  <ListItem><Typewriter text="- Experiência sólida em provisionamento e serviços na AWS" order={5} /></ListItem>
                  <ListItem><Typewriter text="- Consultor na NTT DATA, alocado no Itaú" order={6} /></ListItem>
                  <ListItem><Typewriter text="- Criação de APIs performáticas com chamadas assíncronas" order={7} /></ListItem>
                  <ListItem>
                    <Typewriter text="- Desenvolvedor da plataforma " order={8} />
                    <Link href="https://vitrine-me.com" isExternal color="#1E90FF">
                      <Typewriter text="vitrine-me.com" order={9} />
                    </Link>
                  </ListItem>
                </List>
              </Box>

              <Box as="section" mb={8}>
                <Heading as="h2" size="md" mb={4} color="#01D401">
                  <Typewriter text="> Projetos" order={10} />
                </Heading>
                <List spacing={2} pl={4}>
                  <ListItem>
                    -{" "}
                    <Link
                      href="https://vitrine-me.com"
                      isExternal
                      color="#1E90FF"
                    >
                      <Typewriter text="Vitrine-me: Plataforma para criação de sites institucionais" order={10} />
                    </Link>
                  </ListItem>
                  <ListItem>
                    -{" "}
                    <Link
                      href="https://vitrine-me.com/automacao"
                      isExternal
                      color="#1E90FF"
                    >
                      <Typewriter text="Vitrine-me Automação: Automação de Leads B2B" order={11} />
                    </Link>
                  </ListItem>
                </List>
              </Box>

              <Box as="section" mb={8}>
                <Heading as="h2" size="md" mb={4} color="#01D401">
                  {"> Contato"}
                </Heading>
                <Text>
                  Entre em contato comigo via{" "}
                  <Link
                    href="mailto:henriquejunkes887@gmail.com"
                    color="#01D401"
                  >
                    e-mail
                  </Link>{" "}
                  ou pelo{" "}
                  <Link
                    href="https://www.linkedin.com/in/henrique-alves-junkes/"
                    isExternal
                    color="#01D401"
                  >
                    LinkedIn
                  </Link>
                  .
                </Text>
              </Box>

              <Divider my={6} borderColor="#444" />

              <Text textAlign="center" fontSize="sm">
                &copy; {new Date().getFullYear()} Henrique Junkes. Todos os direitos
                reservados.
              </Text>
            </Box>
          </Container>
        </Box>
      </TypewriterProvider>
    </>
  );
}
