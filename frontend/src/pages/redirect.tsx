const RedirectURL = () => {
  return null;
};

export const getServerSideProps = async (context) => {
  console.log('test', context);
  const { res } = context;
  res.writeHead(301, { location: '/' });
  res.end();
};

export default RedirectURL;
