import {
  Explore,
  GenerateContentSection,
  Portfolio,
  ResponsiveSection,
  Theme,
  Header,
  Extensions,
  Blogging,
  Ecommerce,
  Testimonials,
  Footer,
} from "../app";
import styles from "./styles.module.css";
const { container } = styles;
const MainLayout = () => {
  return (
    <main className={`${container}`}>
      <Header />
      <div className="mx-auto max-w-7xl">
        <Theme />
      </div>
      <Extensions />
      <ResponsiveSection />
      <GenerateContentSection />
      <Explore />
      <Portfolio />
      <Blogging />
      <Ecommerce />
      <Testimonials />
      <Footer />
    </main>
  );
};
export default MainLayout;
