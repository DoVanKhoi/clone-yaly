import { use } from "react";
import LocaleSwitcher from "./components/locale-switcher";

export default function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = use(params).lang;

  return (
    <>
      <LocaleSwitcher />
      Current lang: {lang}
    </>
  );
}
