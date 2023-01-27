'use client';

import { useEffect, useState } from 'react';
import InputBar from '../components/InputBar';
import MessagesList from '../components/MessagesList';

const Discution = ({}: {}) => {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('http://localhost:3000/api/getMessages').then(
        (res) => res.json()
      );
      setInitialData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="h-[85vh]  py-20 mx-10 border-gray-700  overflow-y-auto">
        <MessagesList startUpMessages={initialData} />
      </div>
      <div className="fixed bottom-5  w-full">
        <InputBar />
      </div>
    </div>
  );
};

export default Discution;
