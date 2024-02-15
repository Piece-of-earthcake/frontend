const AlertBox = () => {
  const testData = [
    {
      id: 1,
      location: '충남 예산군 북서쪽 2km 지역',
      date: '2023.11.25',
      magnitude: '1.0'
    },
    {
      id: 2,
      location: '인천 어쩌고 2km 지역',
      date: '2023.11.25',
      magnitude: '2.0'
    },
    {
      id: 3,
      location: '서울 어쩌고 2km 지역',
      date: '2023.11.25',
      magnitude: '3.0'
    },
    {
      id: 4,
      location: '제주 어쩌고 2km 지역',
      date: '2023.11.25',
      magnitude: '4.0'
    },
    {
      id: 5,
      location: '제주 어쩌고 2km 지역',
      date: '2023.11.25',
      magnitude: '4.0'
    },
    {
      id: 6,
      location: '제주 어쩌고 2km 지역',
      date: '2023.11.25',
      magnitude: '4.0'
    },
    {
      id: 7,
      location: '제주 어쩌고 2km 지역',
      date: '2023.11.25',
      magnitude: '4.0'
    },
    {
      id: 8,
      location: '제주 어쩌고 2km 지역',
      date: '2023.11.25',
      magnitude: '4.0'
    }
  ];
  return (
    <div className='flex w-full gap-4 overflow-x-auto'>
      {testData.map(data => (
        <div
          className='flex h-24  min-w-96 rounded-md border border-yellow-500'
          key={data.id}
        >
          <div className='flex w-[97px] items-center justify-center rounded-l-md bg-yellow-100 text-caption3-bold text-yellow-500'>
            {data.magnitude}
          </div>
          <div className='flex flex-col justify-center pl-4'>
            <p className='text-body4 text-black'>{data.location}</p>
            <p className='text-body3 text-gray-400'>{data.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlertBox;
