import Head from "next/head";
import { useAuth } from "@/lib/auth";
import {
	Box,
	SimpleGrid,
	Container,
	Grid,
	GridItem,
	Icon,
	Stack,
} from "@chakra-ui/react";
import { BsLinkedin, BsGithub, BsWordpress } from "react-icons/bs";

import { Flex, Heading, Button, Text } from "@chakra-ui/react";

export default function Home() {
	const auth = useAuth();

	const { user } = auth;

	return (
		<>
			<Head>
				<title>Sariyanta - WordPress and HubSpot CMS Developer</title>
				<meta
					name="description"
					content="I build web solutions for small to medium sized business in The Netherlands and Bali."
				/>
			</Head>
			<Box as="main" mt="63px">
				{/* Header */}
				<Flex as="section" direction="column" maxWidth="60rem" mx="auto" py="12">
					<Heading color="blackAlpha.800" fontSize="7xl" mb="1rem">
						WordPress and HubSpot CMS Developer.
					</Heading>
					<Text as="p" fontSize="2xl" mb="2.5rem">
						I’m Sariyanta, a web developer based in the Netherlands. I work with
						WordPress and HubSpot CMS. In my free time, I build side projects with
						NextJS and Django.
					</Text>
					<Stack direction={"row"} alignSelf="start">
						<Icon as={BsLinkedin} w={6} h={6} />
						<Icon as={BsGithub} w={6} h={6} />
					</Stack>
				</Flex>

				{/* Tech Stack */}
				<Flex
					as="section"
					direction="column"
					maxWidth="60rem"
					mx="auto"
					py="12"
					alignItems="start"
				>
					<Heading as="h2">Technologies I work with</Heading>
					<SimpleGrid gap={5} columns={6} w="100%" py={6}>
						<Technology
							as={GridItem}
							title="WordPress"
							description="The CMS powering a third of the web."
							icon={BsWordpress}
							colSpan={{ base: 6, lg: 3 }}
						/>
						<Technology
							as={GridItem}
							title="WordPress"
							description="The CMS powering a third of the web."
							icon={BsWordpress}
							colSpan={{ base: 6, lg: 3 }}
						/>
						<Technology
							as={GridItem}
							title="WordPress"
							description="The CMS powering a third of the web."
							icon={BsWordpress}
							colSpan={{ base: 6, lg: 3 }}
						/>
					</SimpleGrid>
				</Flex>
			</Box>
		</>
	);
}

function Technology({ title, description, icon, ...rest }) {
	return (
		<GridItem {...rest}>
			<Icon as={icon} />
			<Heading as="h3" fontSize={20}>
				{title}
			</Heading>
			<Text as="div">{description}</Text>
		</GridItem>
	);
}
