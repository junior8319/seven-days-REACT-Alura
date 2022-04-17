import Menu from "./components/Menu";
import NewsSubscription from "./components/NewsSubscription";

export default function Home() {
  return (
    <main>
      <div>
        <Menu />
      </div>
      <div>
        <NewsSubscription />
      </div>
    </main>
  );
}