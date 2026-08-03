import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { HeadContext, type HeadData } from "./components/HeadContext";
import AppRoutesEager from "./AppRoutesEager";

export function render(url: string): { html: string; headData: HeadData | null } {
  let headData: HeadData | null = null;

  const html = renderToString(
    <StaticRouter location={url}>
      <HeadContext.Provider
        value={{
          set: (data) => {
            headData = data;
          },
        }}
      >
        <AppRoutesEager />
      </HeadContext.Provider>
    </StaticRouter>,
  );

  return { html, headData };
}
