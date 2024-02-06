import SectionBoard from '@/components/Ui/SectionBoard';

const EarthquakeNews = () => {
  const title = '지진 뉴스';
  const contents = [
    {
      id: 1,
      title:
        '서귀포 해역 규모 3.8 지진 발생 서귀포 해역 규모 3.8 지진 발생 서귀포 해역 규모 3.8 지진 발생 서귀포 해역 규모 3.8 지진 발생',
      link: 'http://www.jibs.co.kr/news/replay/viewNewsReplayDetail/2024013119235790758?feed=na'
    },
    {
      id: 2,
      title:
        '서귀포 해역 규모 3.8 지진 발생 서귀포 해역 규모 3.8 지진 발생 서귀포 해역 규모 3.8 지진 발생 서귀포 해역 규모 3.8 지진 발생',
      link: 'http://www.jibs.co.kr/news/replay/viewNewsReplayDetail/2024013119235790758?feed=na'
    },
    {
      id: 3,
      title:
        '서귀포 해역 규모 3.8 지진 발생 서귀포 해역 규모 3.8 지진 발생 서귀포 해역 규모 3.8 지진 발생 서귀포 해역 규모 3.8 지진 발생',
      link: 'http://www.jibs.co.kr/news/replay/viewNewsReplayDetail/2024013119235790758?feed=na'
    },
    {
      id: 4,
      title:
        '지진 뉴스 제목 지진 뉴스 제목 지진 뉴스 제목 지진 뉴스 제목 지진 뉴스 제목 지진 뉴스 제목 지진 뉴스 제목 지진 뉴스 제목 지진 뉴스 제목',
      link: 'http://www.jibs.co.kr/news/replay/viewNewsReplayDetail/2024013119235790758?feed=na'
    },
    {
      id: 5,
      title: '지진 뉴스 제목',
      link: 'http://www.jibs.co.kr/news/replay/viewNewsReplayDetail/2024013119235790758?feed=na'
    },
    {
      id: 6,
      title: '지진 뉴스 제목',
      link: 'http://www.jibs.co.kr/news/replay/viewNewsReplayDetail/2024013119235790758?feed=na'
    }
  ];

  return (
    <SectionBoard title={title}>
      <div className='flex flex-col gap-2 text-black'>
        {contents.map(content => (
          <ul key={content.id}>
            <li className='truncate'>
              <a
                className='hover:opacity-60'
                href={content.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                {content.title}
              </a>
            </li>
            <hr />
          </ul>
        ))}
      </div>
    </SectionBoard>
  );
};

export default EarthquakeNews;
