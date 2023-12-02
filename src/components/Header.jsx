export const Header = ({ title }) => {
  const isLogin = true;
  // console.log(props)
  return (
    <header>
      <h1>{title}</h1>
      <hr />
      {/* {isLogin && <h2>Welcome back</h2>} */}
      {isLogin ? <h2>Online</h2> : <h2>Offline</h2>}
    </header>
  );
};
