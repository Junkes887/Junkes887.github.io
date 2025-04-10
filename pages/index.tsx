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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box bg="#1E1E1E" color="#F9FAFB" minH="100vh" py={10}>
        <Container maxW="container.md">
          <VStack spacing={6} textAlign="center">
            <Image
              src="/henrique.jpeg"
              alt="Henrique Junkes"
              borderRadius="full"
              boxSize="160px"
              border="3px solid"
              borderColor="#F9FAFB"
              objectFit="cover"
            />
            <Heading as="h1" size="xl">
              Henrique Junkes
            </Heading>
            <Text fontSize="lg">
              Desenvolvedor de sistemas apaixonado por tecnologia, com foco em
              soluções web escaláveis e interfaces modernas.
            </Text>
          </VStack>

          <Divider my={10} borderColor="#F9FAFB" />

          <Box as="section" mb={8}>
            <Heading as="h2" size="lg" mb={4}>
              🛠️ Experiência
            </Heading>
            <List spacing={2} pl={4}>
              <ListItem>Mais de 6 anos de experiência em desenvolvimento de software</ListItem>
              <ListItem>Especialista em Java, JavaScript e Go</ListItem>
              <ListItem>Experiência sólida em provisionamento e serviços na AWS</ListItem>
              <ListItem>Atuação como consultor na NTT DATA, alocado no Itaú</ListItem>
              <ListItem>Criação de APIs performáticas com uso de chamadas assíncronas</ListItem>
              <ListItem>
                Desenvolvedor da plataforma{" "}
                <Link href="https://vitrine-me.com" isExternal color="#3B82F6">
                  vitrine-me.com
                </Link>
              </ListItem>
            </List>
          </Box>


          <Box as="section" mb={8}>
            <Heading as="h2" size="lg" mb={4}>
              📁 Projetos
            </Heading>
            <List spacing={2} pl={4}>
              <ListItem>
                <Link
                  href="https://vitrine-me.com"
                  isExternal
                  color="#3B82F6"
                >
                  Vitrine-me: Plataforma para criação de sites institucionais
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://vitrine-me.com/automacao"
                  isExternal
                  color="#3B82F6"
                >
                  Vitrine-me Automação: Automação de Leads B2B
                </Link>
              </ListItem>
            </List>
          </Box>

          <Box as="section" mb={8}>
            <Heading as="h2" size="lg" mb={4}>
              📫 Contato
            </Heading>
            <Text>
              Entre em contato comigo via{" "}
              <Link
                href="mailto:henriquejunkes887@gmail.com"
                color="#3B82F6"
              >
                e-mail
              </Link>{" "}
              ou pelo{" "}
              <Link
                href="https://www.linkedin.com/in/henrique-alves-junkes/"
                isExternal
                color="#3B82F6"
              >
                LinkedIn
              </Link>
              .
            </Text>
          </Box>

          <Divider my={10} borderColor="#F9FAFB" />

          <Text textAlign="center" fontSize="sm">
            &copy; {new Date().getFullYear()} Henrique Junkes. Todos os direitos
            reservados.
          </Text>
        </Container>
      </Box>
    </>
  );
}
