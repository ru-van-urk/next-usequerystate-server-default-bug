import QueryState from "@/app/querystate";
import { enumArrayParser } from "@/app/parsers";
import { parseAsString } from "next-usequerystate";

type HomeProps = {
  searchParams: {
    state: string | string[] | undefined;
    string: string | string[] | undefined;
  };
};

export default function Home({ searchParams }: HomeProps) {
  const state = enumArrayParser
    .withDefault(["default-server"])
    .parseServerSide(searchParams.state);

  const string = parseAsString
    .withDefault("this is a string")
    .parseServerSide(searchParams.string);

  return (
    <>
      {/* This never shows */}
      <p>{string}</p>
      {/* State only shows when present in url, eg. ?state=client */}
      <p>Server side parsed: {state}</p>
      <QueryState />
    </>
  );
}
