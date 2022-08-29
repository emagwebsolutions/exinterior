import { useEffect, useState } from 'react';
import { useStore } from 'store/store';
import { PortableText } from '@portabletext/react';

const Homesectionfive = () => {
  const { state } = useStore();
  const [promotion, setPromotion] = useState([]);

  useEffect(() => {
    setPromotion(state.getPromotion);
  }, [state]);

  const obj = Object.values(promotion).map((v: any, k: any) => (
    <div key={k} className="promotion">
      <h4>{v.title}</h4>
      <div>
        <PortableText value={v.body} />
      </div>
    </div>
  ));

  return (
    <section>
      <div className="container">{obj}</div>
    </section>
  );
};

export default Homesectionfive;
