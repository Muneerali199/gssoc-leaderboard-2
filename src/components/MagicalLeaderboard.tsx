import React from 'react';

interface PRDetail {
  level: number;
  count: number;
  prNumbers: number[];
  points: number;
}

interface Contributor {
  rank: number;
  username: string;
  description?: string;
  totalPoints: number;
  prs: number;
  prDetails: PRDetail[];
  githubUrl: string;
}

interface PointSystem {
  level: number;
  points: number;
  description: string;
}

interface MagicalLeaderboardProps {
  contributors: Contributor[];
  pointSystem: PointSystem[];
}

const MagicalLeaderboard: React.FC<MagicalLeaderboardProps> = ({ contributors, pointSystem }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-harryPotter text-gold mb-4 tracking-wide">
            Gssoc 25 Contributor Leaderboard
          </h1>
          <p className="text-xl text-silver font-serif">
            The magical hall of fame for our most dedicated wizards and witches
          </p>
        </div>

        {/* Point System */}
        <div className="bg-gradient-to-r from-darkBlue to-purple-900 rounded-lg p-6 mb-12 border border-silver shadow-lg">
          <h2 className="text-3xl font-harryPotter text-gold mb-4">Point System</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pointSystem.map((system) => (
              <div key={system.level} className="bg-background/50 p-4 rounded-lg border border-gold/30">
                <h3 className="text-xl font-harryPotter text-silver">Level {system.level}</h3>
                <p className="text-gold text-2xl font-bold">{system.points} points</p>
                <p className="text-silver">{system.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <div className="bg-gradient-to-br from-darkBlue/90 to-purple-900/90 rounded-lg p-6 border border-silver shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-harryPotter text-gold">Magical Contributors</h2>
            <div className="text-silver font-serif">
              Showing {contributors.length} wizards
            </div>
          </div>

          <div className="space-y-6">
            {contributors.map((contributor) => (
              <div key={contributor.rank} className="bg-background/50 rounded-lg p-6 border border-silver/20 hover:border-gold transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="text-3xl font-harryPotter text-gold mr-6 w-12 text-center">
                      {contributor.rank}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        <a 
                          href={contributor.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-gold transition-colors"
                        >
                          {contributor.username}
                        </a>
                      </h3>
                      {contributor.description && (
                        <p className="text-silver text-sm">{contributor.description}</p>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-gold text-3xl font-bold">{contributor.totalPoints}</div>
                    <div className="text-silver">points</div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-silver/20">
                  <div className="text-silver mb-2">
                    {contributor.prs} PR{contributor.prs !== 1 ? 's' : ''} total
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {contributor.prDetails.map((detail) => (
                      <div key={detail.level} className="bg-background/30 p-3 rounded border border-silver/10">
                        <div className="flex justify-between">
                          <span className="text-silver">Level {detail.level}:</span>
                          <span className="text-gold">{detail.count} PR{detail.count !== 1 ? 's' : ''}</span>
                        </div>
                        <div className="text-xs text-silver mt-1">
                          PR #{detail.prNumbers.join(', #')}
                        </div>
                        <div className="text-right text-gold mt-1">
                          +{detail.points} points
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagicalLeaderboard;