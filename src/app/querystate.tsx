"use client";
import { numberArrayParser, enumArrayParser } from "@/app/parsers";
import { useQueryState } from "next-usequerystate";
import React from "react";

const QueryState = () => {
  const [state, setState] = useQueryState(
    "state",
    enumArrayParser
      .withOptions({ shallow: false })
      .withDefault(["default-client"])
  );

  return (
    <>
      <p>Client State: {state.join(", ")}</p>
      {!state?.includes("client") ? (
        <button onClick={() => setState(["client"])}>Set Client State</button>
      ) : (
        <button onClick={() => setState(null)}>Remove Client State</button>
      )}
    </>
  );
};

export default QueryState;
