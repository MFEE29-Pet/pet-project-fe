import { createContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageContext = createContext([]);

export default PageContext;

export const PageContextProvider = function ({ children }) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const params = new URLSearchParams(location.search);
  let cate = +params.get('cate') || '';
  let nowPage = +params.get('page') || 1;
  console.log(nowPage);

  return (
    <PageContext.Provider value={{ cate, nowPage }}>
      {children}
    </PageContext.Provider>
  );
};
