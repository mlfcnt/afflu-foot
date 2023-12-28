import "devextreme/dist/css/dx.light.compact.css";
import { Datagrid } from "./components/Datagrid";
import { crawl } from "./crawler/basic";

export default async function Home() {
  const journees = await crawl();
  if (!journees) return <p>Chargement...</p>;
  return <Datagrid journees={journees} />;
}
