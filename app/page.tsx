import "devextreme/dist/css/dx.light.css";
import { Datagrid } from "./components/Datagrid";
import { crawl } from "./crawler/basic";

export default async function Home() {
  const journees = await crawl();
  return <Datagrid journees={journees} />;
}
