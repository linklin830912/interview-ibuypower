"use client";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import ApplicationContext from "./components/contexts/ApplicationContext";
import MainContent from "./components/contents/MainContent";

export default function Home() {
  const queryClient = new QueryClient();
  const [isMobile, setIsMobile] = useState<boolean>();

  return (
    <ApplicationContext.Provider value={{ isMobile: isMobile }}>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <MainContent
          onApplicationLoaded={setIsMobile}
          applicationLimitWidth={768}
        />
      </QueryClientProvider>
    </ApplicationContext.Provider>
  );
}
