import { ContactLink } from "@/components/contacts/ContactLink";
import { ContactsLayout } from "@/components/contacts/ContactsLayout";
import { TSocialIcon } from "@/components/icon/Icon";
import Image from "next/image";

const socials = [
  {
    platform: "github",
    link: "https://github.com/ChebotarYuliia",
  },
  {
    platform: "linkedin",
    link: "https://www.linkedin.com/in/yuliia-chebotar-421340169/",
  },
  {
    platform: "telegram",
    link: "t.me/soykaJ",
  },
  {
    platform: "gmail",
    link: "mailto:chebotar609@gmail.com",
  },
];

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
