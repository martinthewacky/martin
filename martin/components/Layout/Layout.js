import style from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <div className={style.headerBg}></div>
      </header>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}></footer>
    </div>
  );
};

export default Layout;
