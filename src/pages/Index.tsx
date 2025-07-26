import MagicalLeaderboard from '@/components/MagicalLeaderboard';
import MagicalAudio from '@/components/MagicalAudio';
import magicalBackground from '@/assets/magical-background.jpg';

const Index = () => {
  const contributors = [
    {
      rank: 1,
      username: 'xenonesis',
      description: 'Original contributor',
      totalPoints: 50,
      prs: 6,
      prDetails: [
        { level: 1, count: 1, prNumbers: [39], points: 3 },
        { level: 2, count: 1, prNumbers: [44], points: 7 },
        { level: 3, count: 4, prNumbers: [89, 61, 51, 48], points: 40 },
      ],
      githubUrl: 'https://github.com/xenonesis',
    },
    {
      rank: 2,
      username: 'madhuravalliakshaya',
      totalPoints: 10,
      prs: 2,
      prDetails: [
        { level: 1, count: 1, prNumbers: [113], points: 3 },
        { level: 2, count: 1, prNumbers: [115], points: 7 },
      ],
      githubUrl: 'https://github.com/madhuravalliakshaya',
    },
    {
      rank: 3,
      username: 'anjany06',
      totalPoints: 7,
      prs: 1,
      prDetails: [
        { level: 2, count: 1, prNumbers: [126], points: 7 },
      ],
      githubUrl: 'https://github.com/anjany06',
    },
    {
      rank: 4,
      username: 'PROfESSOR-V',
      totalPoints: 7,
      prs: 1,
      prDetails: [
        { level: 2, count: 1, prNumbers: [67], points: 7 },
      ],
      githubUrl: 'https://github.com/PROfESSOR-V',
    },
    {
      rank: 5,
      username: 'vinay-sikarwar',
      totalPoints: 7,
      prs: 1,
      prDetails: [
        { level: 2, count: 1, prNumbers: [60], points: 7 },
      ],
      githubUrl: 'https://github.com/vinay-sikarwar',
    },
    {
      rank: 6,
      username: '213sanjana',
      totalPoints: 7,
      prs: 1,
      prDetails: [
        { level: 2, count: 1, prNumbers: [55], points: 7 },
      ],
      githubUrl: 'https://github.com/213sanjana',
    },
    {
      rank: 7,
      username: 'palaknagar-07',
      totalPoints: 7,
      prs: 1,
      prDetails: [
        { level: 2, count: 1, prNumbers: [22], points: 7 },
      ],
      githubUrl: 'https://github.com/palaknagar-07',
    },
    {
      rank: 8,
      username: 'MayankV004',
      totalPoints: 7,
      prs: 1,
      prDetails: [
        { level: 2, count: 1, prNumbers: [81], points: 7 },
      ],
      githubUrl: 'https://github.com/MayankV004',
    },
    {
      rank: 9,
      username: 'AnoushkaSamanta',
      totalPoints: 7,
      prs: 1,
      prDetails: [
        { level: 2, count: 1, prNumbers: [68], points: 7 },
      ],
      githubUrl: 'https://github.com/AnoushkaSamanta',
    },
    {
      rank: 10,
      username: 'ys09123',
      totalPoints: 7,
      prs: 1,
      prDetails: [
        { level: 2, count: 1, prNumbers: [50], points: 7 },
      ],
      githubUrl: 'https://github.com/ys09123',
    },
    {
      rank: 11,
      username: 'parthparmar07',
      totalPoints: 7,
      prs: 1,
      prDetails: [
        { level: 2, count: 1, prNumbers: [121], points: 7 },
      ],
      githubUrl: 'https://github.com/parthparmar07',
    },
    {
      rank: 12,
      username: 'SkundKumar',
      totalPoints: 6,
      prs: 2,
      prDetails: [
        { level: 1, count: 2, prNumbers: [85, 83], points: 6 },
      ],
      githubUrl: 'https://github.com/SkundKumar',
    },
    {
      rank: 13,
      username: 'Monal-Jain01',
      totalPoints: 3,
      prs: 1,
      prDetails: [
        { level: 1, count: 1, prNumbers: [123], points: 3 },
      ],
      githubUrl: 'https://github.com/Monal-Jain01',
    },
    {
      rank: 14,
      username: 'HemantSharma456',
      totalPoints: 3,
      prs: 1,
      prDetails: [
        { level: 1, count: 1, prNumbers: [125], points: 3 },
      ],
      githubUrl: 'https://github.com/HemantSharma456',
    },
    {
      rank: 15,
      username: 'silkic',
      totalPoints: 3,
      prs: 1,
      prDetails: [
        { level: 1, count: 1, prNumbers: [94], points: 3 },
      ],
      githubUrl: 'https://github.com/silkic',
    },
    {
      rank: 16,
      username: 'Shiv24angi',
      totalPoints: 3,
      prs: 1,
      prDetails: [
        { level: 1, count: 1, prNumbers: [97], points: 3 },
      ],
      githubUrl: 'https://github.com/Shiv24angi',
    },
    {
      rank: 17,
      username: 'Kirti-Pant',
      totalPoints: 3,
      prs: 1,
      prDetails: [
        { level: 1, count: 1, prNumbers: [99], points: 3 },
      ],
      githubUrl: 'https://github.com/Kirti-Pant',
    },
    {
      rank: 18,
      username: 'DivyaJain-DataAnalyst',
      totalPoints: 3,
      prs: 1,
      prDetails: [
        { level: 1, count: 1, prNumbers: [103], points: 3 },
      ],
      githubUrl: 'https://github.com/DivyaJain-DataAnalyst',
    },
    {
      rank: 19,
      username: 'VisibleNasir',
      totalPoints: 3,
      prs: 1,
      prDetails: [
        { level: 1, count: 1, prNumbers: [23], points: 3 },
      ],
      githubUrl: 'https://github.com/VisibleNasir',
    },
    {
      rank: 20,
      username: '12Mishra',
      totalPoints: 3,
      prs: 1,
      prDetails: [
        { level: 1, count: 1, prNumbers: [20], points: 3 },
      ],
      githubUrl: 'https://github.com/12Mishra',
    },
    {
      rank: 21,
      username: 'Suhani1234-5',
      totalPoints: 3,
      prs: 1,
      prDetails: [
        { level: 1, count: 1, prNumbers: [70], points: 3 },
      ],
      githubUrl: 'https://github.com/Suhani1234-5',
    },
    {
      rank: 22,
      username: 'radhika-droid',
      totalPoints: 3,
      prs: 1,
      prDetails: [
        { level: 1, count: 1, prNumbers: [69], points: 3 },
      ],
      githubUrl: 'https://github.com/radhika-droid',
    },
    {
      rank: 23,
      username: 'sampada115',
      totalPoints: 3,
      prs: 1,
      prDetails: [
        { level: 1, count: 1, prNumbers: [38], points: 3 },
      ],
      githubUrl: 'https://github.com/sampada115',
    },
  ];

  const pointSystem = [
    { level: 1, points: 3, description: 'Basic spells' },
    { level: 2, points: 7, description: 'Advanced charms' },
    { level: 3, points: 10, description: 'Masterful enchantments' },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Magical background */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${magicalBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Animated magical elements */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="absolute top-10 left-10 text-yellow-400 animate-sparkle opacity-70 text-2xl">✨</div>
        <div className="absolute top-20 right-20 text-yellow-400 animate-sparkle opacity-70 text-xl" style={{ animationDelay: '1s' }}>⭐</div>
        <div className="absolute bottom-20 left-20 text-yellow-400 animate-sparkle opacity-70 text-2xl" style={{ animationDelay: '2s' }}>🌟</div>
        <div className="absolute bottom-10 right-10 text-yellow-400 animate-sparkle opacity-70 text-xl" style={{ animationDelay: '0.5s' }}>✨</div>
        <div className="absolute top-1/2 left-1/4 text-yellow-400 animate-sparkle opacity-50 text-lg" style={{ animationDelay: '1.5s' }}>⚡</div>
        <div className="absolute top-1/3 right-1/3 text-blue-400 animate-sparkle opacity-50 text-lg" style={{ animationDelay: '2.5s' }}>🔮</div>
        <div className="absolute top-3/4 left-1/2 text-purple-400 animate-sparkle opacity-40 text-sm" style={{ animationDelay: '3s' }}>🪄</div>
        <div className="absolute top-1/4 left-3/4 text-green-400 animate-sparkle opacity-60 text-lg" style={{ animationDelay: '1.8s' }}>🐍</div>
      </div>

      {/* Main content */}
      <div className="relative z-20">
        <MagicalLeaderboard contributors={contributors} pointSystem={pointSystem} />
      </div>

      {/* Magical audio player */}
      <MagicalAudio />
    </div>
  );
};

export default Index;