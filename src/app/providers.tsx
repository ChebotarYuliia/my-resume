import { Locale } from "@/i18n/i18n";
import { UIStateProvider } from "@/state/state";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";

type Props = {
  children: React.ReactNode;
  locale: Locale;
  messages: AbstractIntlMessages;
};

export function Providers({ messages, locale, children }: Props) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="UTC">
      <UIStateProvider>{children}</UIStateProvider>
    </NextIntlClientProvider>
  );
}
