import React from 'react';
import { useStore } from 'store/store';
import { useEffect, useState } from 'react';

const useGetPostData = () => {
  const { state } = useStore();

  const [allPost, setAllpost] = useState(null);

  useEffect(() => {
    setAllpost(state.getPost);
  }, [state]);

  return allPost
};

export default useGetPostData
