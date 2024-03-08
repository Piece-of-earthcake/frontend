'use client';

const FindShelterButton = () => {
  const handleScroll = () => {
    const shelterFinderScroll =
      document.getElementById('shelterFinder')?.offsetTop;

    if (shelterFinderScroll) {
      window.scrollTo({
        top: shelterFinderScroll - 56,
        behavior: 'smooth'
      });
    }
  };

  return (
    <button
      className='rounded-sm bg-yellow-400 px-6 py-2 text-white'
      onClick={handleScroll}
    >
      내주변 대피소찾기
    </button>
  );
};

export default FindShelterButton;
