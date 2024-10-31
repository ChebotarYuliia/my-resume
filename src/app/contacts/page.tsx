import { ContactLink } from "@/components/contacts/ContactLink";
import { ContactsLayout } from "@/components/contacts/ContactsLayout";
import { TSocialIcon } from "@/components/icon/Icon";
import Image from "next/image";
import { socials } from "../data/data";

export default function ContactsPage() {
  return (
    <ContactsLayout
      links={socials.map((link, i) => (
        <ContactLink
          key={i}
          platform={link.platform as TSocialIcon}
          link={link.link}
        />
      ))}
      title="Contact me via:"
    >
      <Image
        src="/contacts.gif"
        width={1500}
        height={1000}
        alt="swimming fish"
        priority={true}
      />
    </ContactsLayout>
  );
}
