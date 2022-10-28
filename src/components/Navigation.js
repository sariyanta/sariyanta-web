import logo from "@/img/sariyanta.jpeg";
import Image from "next/future/image";
import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";

export default function Navigation() {
	return (
		<Flex
			as="header"
			w={"100%"}
			borderBottom="1px"
			borderColor="gray.100"
			zIndex={1024}
			backgroundColor="white"
		>
			<Flex
				maxWidth="60rem"
				mx="auto"
				py=".5rem"
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				flexGrow={1}
			>
				<Box borderRadius={"full"} display={"inline-block"} overflow="hidden">
					<Link href="/">
						<a>
							<Image
								src={logo}
								width={46}
								height={46}
								alt="Picture of Sariyanta as logo"
							/>
						</a>
					</Link>
				</Box>
				<Flex as="nav" ml="auto">
					yes
				</Flex>
			</Flex>
		</Flex>
	);
}
