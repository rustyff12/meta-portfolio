import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faLinkedin,
    faMedium,
    faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
    {
        icon: faEnvelope,
        url: "mailto: hello@example.com",
    },
    {
        icon: faGithub,
        url: "https://github.com",
    },
    {
        icon: faLinkedin,
        url: "https://www.linkedin.com",
    },
    {
        icon: faMedium,
        url: "https://medium.com",
    },
    {
        icon: faStackOverflow,
        url: "https://stackoverflow.com",
    },
];

const Header = () => {
    const [prevScrollPosition, setPrevScrollPosition] = useState(0);
    const [visible, setVisible] = useState(true);
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const currScrollPos = window.scrollY;
            setVisible(
                prevScrollPosition > currScrollPos || currScrollPos < 200
            );
            setPrevScrollPosition(currScrollPos);
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPosition]);

    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <Box
            ref={headerRef}
            position="fixed"
            top={0}
            left={0}
            right={0}
            // translateY={0}
            transitionProperty="transform"
            transitionDuration=".5s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="#18181b"
            zIndex="999"
            transform={visible ? "translateY(0)" : "translateY(-200px)"}
        >
            <Box color="white" maxWidth="1280px" margin="0 auto">
                <HStack
                    px={16}
                    py={4}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <nav>
                        {/* Add social media links based on the `socials` data */}
                        {socials.map((item) => (
                            <a
                                href={item.url}
                                target="blank"
                                style={{ padding: "0 10px" }}
                                key={Math.random()}
                            >
                                <FontAwesomeIcon icon={item.icon} size="2x" />
                            </a>
                        ))}
                    </nav>
                    <nav>
                        <HStack spacing={8}>
                            {/* Add links to Projects and Contact me section */}
                            <a onClick={handleClick("projects")}>Projects</a>
                            <a onClick={handleClick("contactme")}>Contact Me</a>
                        </HStack>
                    </nav>
                </HStack>
            </Box>
        </Box>
    );
};
export default Header;
