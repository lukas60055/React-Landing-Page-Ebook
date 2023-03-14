import { useEffect, useState } from 'react';
import { DataLanding } from '../types/dataLanding';

const useDataLanding = (dataLanding: Object): DataLanding => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    setData(dataLanding);
  }, [dataLanding]);

  return data;
};

export default useDataLanding;
