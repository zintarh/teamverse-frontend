'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Header from './Header';
import Button from './Button';
import InviteCode from './InviteCode';

const GameSetupPanel = () => {
  const router = useRouter();

  const [rounds, setRounds] = useState('5 rounds');
  const [roundDropdown, setRoundDropdown] = useState(false);

  const [timePerRound, setTimePerRound] = useState('60 secs');
  const [timeDropdown, setTimeDropdown] = useState(false);

  const [maxPlayers, setMaxPlayers] = useState('Leave open');
  const [playerDropdown, setPlayerDropdown] = useState(false);

  const [waitingTime, setWaitingTime] = useState('60 secs');
  const [waitingDropdown, setWaitingDropdown] = useState(false);

  const [points, setPoints] = useState('10 Pts');
  const [pointsDropdown, setPointsDropdown] = useState(false);

  const dropdownClass =
    'absolute z-10 mt-1 w-full bg-[#1F1F1F]  rounded-md text-sm shadow-lg cursor-pointer';

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center p-4"
      style={{ backgroundImage: "url('/background/island-background.png')" }}
    >
      <div className="w-full max-w-2xl bg-[#111111] text-white rounded-xl shadow-xl p-6  relative">
        <Header />
        <div className=" max-w-sm mx-auto">
          <div className="mb-6">
            <InviteCode code="04576" />
          </div>

          {/* Dropdowns */}
          <div className="space-y-4 mb-6 relative">
            <div className="relative">
              <button
                onClick={() => setRoundDropdown(!roundDropdown)}
                className="w-full px-4 py-3 text-left bg-[#1F1F1F] text-sm rounded-md  flex justify-between items-center"
              >
                <span>Number of Rounds</span>
                <span className="text-gray-400 flex items-center gap-2">
                  {rounds} <ChevronDown className="w-4 h-4" />
                </span>
              </button>
              {roundDropdown && (
                <div className={dropdownClass}>
                  {['3 rounds', '5 rounds', '7 rounds'].map((opt) => (
                    <div
                      key={opt}
                      onClick={() => {
                        setRounds(opt);
                        setRoundDropdown(false);
                      }}
                      className="px-4 py-2 hover:bg-[#2e2e2e] cursor-pointer"
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Time Per Round */}
            <div className="relative">
              <button
                onClick={() => setTimeDropdown(!timeDropdown)}
                className="w-full px-4 py-3 text-left bg-[#1F1F1F] text-sm rounded-md  flex justify-between items-center"
              >
                <span>Time Per Round</span>
                <span className="text-gray-400 flex items-center gap-2">
                  {timePerRound} <ChevronDown className="w-4 h-4" />
                </span>
              </button>
              {timeDropdown && (
                <div className={dropdownClass}>
                  {['30 secs', '45 secs', '60 secs', '90 secs'].map((opt) => (
                    <div
                      key={opt}
                      onClick={() => {
                        setTimePerRound(opt);
                        setTimeDropdown(false);
                      }}
                      className="px-4 py-2 hover:bg-[#2e2e2e] cursor-pointer"
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Max Players */}
            <div className="relative">
              <button
                onClick={() => setPlayerDropdown(!playerDropdown)}
                className="w-full px-4 py-3 text-left bg-[#1F1F1F] text-sm rounded-md  flex justify-between items-center"
              >
                <span>Max Players</span>
                <span className="text-gray-400 flex items-center gap-2">
                  {maxPlayers} <ChevronDown className="w-4 h-4" />
                </span>
              </button>
              {playerDropdown && (
                <div className={dropdownClass}>
                  {[
                    'Leave open',
                    '2 players',
                    '3 players',
                    '4 players',
                    '5 players',
                  ].map((opt) => (
                    <div
                      key={opt}
                      onClick={() => {
                        setMaxPlayers(opt);
                        setPlayerDropdown(false);
                      }}
                      className="px-4 py-2 hover:bg-[#2e2e2e] cursor-pointer"
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Waiting Time */}
            <div className="relative">
              <button
                onClick={() => setWaitingDropdown(!waitingDropdown)}
                className="w-full px-4 py-3 text-left bg-[#1F1F1F] text-sm rounded-md  flex justify-between items-center"
              >
                <span>Waiting Time</span>
                <span className="text-gray-400 flex items-center gap-2">
                  {waitingTime} <ChevronDown className="w-4 h-4" />
                </span>
              </button>
              {waitingDropdown && (
                <div className={dropdownClass}>
                  {['30 secs', '45 secs', '60 secs'].map((opt) => (
                    <div
                      key={opt}
                      onClick={() => {
                        setWaitingTime(opt);
                        setWaitingDropdown(false);
                      }}
                      className="px-4 py-2 hover:bg-[#2e2e2e] cursor-pointer"
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Points for Correct Guess */}
            <div className="relative">
              <button
                onClick={() => setPointsDropdown(!pointsDropdown)}
                className="w-full px-4 py-3 text-left bg-[#1F1F1F] text-sm rounded-md  flex justify-between items-center"
              >
                <span>Point For Correct Guess</span>
                <span className="text-gray-400 flex items-center gap-2">
                  {points} <ChevronDown className="w-4 h-4" />
                </span>
              </button>
              {pointsDropdown && (
                <div className={dropdownClass}>
                  {['5 Pts', '10 Pts', '15 Pts'].map((opt) => (
                    <div
                      key={opt}
                      onClick={() => {
                        setPoints(opt);
                        setPointsDropdown(false);
                      }}
                      className="px-4 py-2 hover:bg-[#2e2e2e] cursor-pointer"
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <Button
            onClick={() => router.push('/statement-upload')}
            label="Proceed to waiting room"
          />
        </div>
      </div>
    </div>
  );
};

export default GameSetupPanel;
