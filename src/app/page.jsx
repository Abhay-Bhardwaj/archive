'use client'

import ArchiveList from "@/components/ArchiveList";
import SearchTab from "@/components/SearchTab";
import { client } from "@/helper/ApolloClient";
import { ApolloProvider } from "@apollo/client";
import { useState } from "react";


export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <ApolloProvider client={client}>
      <main className="flex flex-col p-2">
        <SearchTab searchTerm={searchTerm} setSearchTerm={setSearchTerm}  />
        <ArchiveList searchTerm={searchTerm} />
      </main>
    </ApolloProvider>
      
  );
}
