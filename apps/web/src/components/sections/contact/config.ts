import type { Contact } from "@/types/contact";
import { SiLinkedin } from "@icons-pack/react-simple-icons";

const contact: Contact = {
  email: "hello@widocode.com",
  socials: [
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/walid-mecheri-wido/",
      Icon: SiLinkedin,
    },
  ],
};

export { contact };
